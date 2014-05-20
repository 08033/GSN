// Code goes here

function organization($scope){
    $scope.person = 'Hasan';
}

function GSNChat($scope) {
    $scope.topchats =
    [
        { subject: 'Alpha', likes: 15 },
        { subject: 'Beta', likes: 35 },
        { subject: 'Gamma', likes: 5 }
    ];

    $scope.menu =
    [
        { title: 'Home', link: '/' },
        { title: 'Profile', link: '/' },
        { title: 'GradChat', link: '/' },
        { title: 'FShare', link: '/' }
    ];
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}