function play(){
    navigator.mediaDevices.getUserMedia({Audio : true});
    
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4azDopcSd/model.json",modelready);

}

function modelready(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_accuracy").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img1 = document.getElementById("image-1");
        img2 = document.getElementById("image-2");
        img3 = document.getElementById("image-3");
        img4 = document.getElementById("image-4");


        if(results[0].label == "barking"){
            img1.style.border = "solid"; 
            img2.style.border = "none";
            img3.style.border = "none";
            img4.style.border = "none";
        }
        else if (results[0].label == "Meowing"){
            img1.style.border = "none";
            img2.style.border = "solid";
            img3.style.border = "none";
            img4.style.border = "none";
        }
        else if (results[0].label == "Roar"){
            img1.style.border = "none";
            img2.style.border = "none";
            img3.style.border = "solid";
            img4.style.border = "none";
        }
        else if (results[0].label == "Mooing"){
            img1.style.border = "none";
            img2.style.border = "none";
            img3.style.border = "none";
            img4.style.border = "solid";
        }

    }

}