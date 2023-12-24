function mean(scores) {
    const sum = scores.reduce((acc, curr) => acc + curr, 0);
    return sum / scores.length;
}

module.exports = mean;
