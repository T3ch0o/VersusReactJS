export default function(handSign, status) {
    const winReplicas = [ `Choice: ${handSign} - Hahahah! I win this time!`, `Choice: ${handSign} - I'm unstoppable now!` ];
    const lossReplicas = [ `Choice: ${handSign} - Maybe I will get you next time!`, `Choice: ${handSign} - You are legend!` ];
    const drawReplicas = [ `Choice: ${handSign} - You are strong as I am.`, `Choice: ${handSign} - We are on the same spot again.` ];

    const randomIndex = Math.floor(Math.random() * 2);

    if (status === 'Win') {
        return winReplicas[randomIndex];
    } else if (status === 'Loss') {
        return lossReplicas[randomIndex];
    } else {
        return drawReplicas[randomIndex];
    }
}
