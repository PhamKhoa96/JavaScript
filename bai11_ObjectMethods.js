var bone = {
    weight: 0.5
};

var myDog = {
    weight: 5,
    name: 'Ngao',
    age: 1,

    bark: function(){   //anonymous function: function khong ten 
        console.log('Meo meo, my name is', this.name);
    },
    eat: function(bone){
        this.weight = this.weight + bone.weight;
        return this.weight;
    }
};

console.log(myDog.weight);
console.log(myDog.bark());

function bark(){   //function nay khong lien quan gi den function bark trong Object myDog
    console.log('Gau gau, my name is', this.name);
}

console.log(myDog.bark());

console.log('Before eating: ', myDog.weight);
console.log('After eating: ', myDog.eat(bone))