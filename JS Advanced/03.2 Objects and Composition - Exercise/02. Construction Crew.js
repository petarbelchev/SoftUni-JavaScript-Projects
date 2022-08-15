function constructionCrew(worker) {
    if (worker.dizziness == true) getHydrate(worker);
    return worker;

    function getHydrate(worker) {
        worker.levelOfHydrated += (worker.weight * 0.1) * worker.experience;
        worker.dizziness = false;
    }
}

console.log(constructionCrew(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
));