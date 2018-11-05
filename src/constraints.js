var red_conditions = {
    'danceability': [0.8, 1.0],
    'energy': [0.9, 1.0],
    'tempo': [100, 200],
    'valence': [0.0, 0.4]
};

var orange_conditions = {
    'danceability': [0.6, 1.0],
    'energy': [0.8, 1.0],
    'tempo': [100, 150],
    'valence': [0.6, 0.8]
};

var yellow_conditions = {
    'danceability': [0.7, 1.0],
    'energy': [0.8, 1.0],
    'tempo': [100, 200],
    'valence': [0.8, 1.0]
};

var green_conditions = {
    'danceability': [0.0, 0.4],
    'energy': [0.3, 0.5],
    'instrumentalness': [0.5, 1.0],
    'tempo': [0, 80],
    'valence': [0.4, 0.6]
};

var blue_conditions = {
    'danceability': [0.0, 0.4],
    'energy': [0.3, 0.5],
    'instrumentalness': [0.3, 1.0],
    'tempo': [0, 85],
    'valence': [0.0, 0.4]
};

var pink_conditions = {
    'danceability': [0.5, 1.0],
    'energy': [0.6, 0.8],
    'instrumentalness': [0.0, 0.7],
    'tempo': [80, 170],
    'valence': [0.7, 1.0]
};

module.exports = {
    red_conditions: red_conditions,
    orange_conditions: orange_conditions,
    yellow_conditions: yellow_conditions,
    green_conditions: green_conditions,
    blue_conditions: blue_conditions,
    pink_conditions: pink_conditions
};
