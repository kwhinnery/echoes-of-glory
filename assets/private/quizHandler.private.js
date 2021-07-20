function statAnalysis(stats, ARCHETYPES) {
  let affinityList = [];
  ARCHETYPES.forEach(archetype => {
    const affinity = stats[archetype.stats[0]] + stats[archetype.stats[1]];
    affinityList.push(Object.assign(archetype, {
      affinity
    }));
  });

  affinityList.sort((a, b) => { 
    return b.affinity - a.affinity;
  });
  console.log(affinityList);
  return affinityList[0].text;
}

module.exports = async function(context, event) {
  const { 
    QUESTIONS, 
    ARCHETYPES
  } = context.requireFromAssets('/private/questions.js');
  let messageBody = `We're sorry, there was a problem with our quiz - please try again.`;

  function updateStats(bonuses) {
    [
      'strength',
      'constitution',
      'dexterity',
      'wisdom',
      'intelligence', 
      'charisma'
    ].forEach(stat => {
      context.currentUserData.stats[stat] += bonuses[stat] || 0;
    });
  }

  if (
    !context.currentUserData || 
    isNaN(context.currentUserData.questionIndex) ||
    context.currentUserData.questionIndex === -1
  ) {
    // This is the beginning of the quiz, where no user input is being tracked
    messageBody = `🥇🥈🥉 What international sport of yesteryear best suits your talents and temperament? Let's find out by asking a few questions: ${QUESTIONS[0].text}`;
    context.currentUserData.questionIndex = 0;
    context.currentUserData.stats = {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      wisdom: 0,
      intelligence: 0,
      charisma: 0
    };
  } else if (context.currentUserData.questionIndex < 6) {
    /*
    - Process previous input and give an error if necessary
    - Update attributes based on the answer to the current question
    - Ask the next question and update the question index
    */
    const input = event.Body ? event.Body.trim().toLowerCase() : '';
    const question = QUESTIONS[context.currentUserData.questionIndex];

    if (
      !input || 
      !(input === 'a' ||input === 'b' || input === 'c' || input === 'd')
    ) {
      // Prompt with same question, don't update state
      messageBody = `Please reply with a letter "A" through "D". ${question.text}`;
    } else {
      const choice = question.bonuses[input];
      updateStats(choice);
      context.currentUserData.questionIndex++;

      if (context.currentUserData.questionIndex < 6) {
        // Ask next question and increment
        messageBody = `${QUESTIONS[context.currentUserData.questionIndex].text}`;
      } else {
        // Return stat analysis
        const stats = context.currentUserData.stats;
        messageBody = `Your Discontinued Sport: ${statAnalysis(stats, ARCHETYPES)}`;
        context.currentUserData.questionIndex = -1;
      }
    }
  }

  context.messageBody = messageBody;
};
