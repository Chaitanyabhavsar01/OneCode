let user = [];
let url = "https://kontests.net/api/v1/all"
let responce = fetch(url)
responce.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests)
    user = contests
    ihtml = ""
    for (item in contests) {
        console.log(contests[item])

        let image = "";
        if (contests[item].site == "HackerRank") {
            image = "https://nicolasliuprojects.files.wordpress.com/2017/10/hackerrank_logo.png"
        }
        else if (contests[item].site == "HackerEarth") {
            image = "https://questionpapershub.com/free-job-alert/wp-content/uploads/2021/03/HackerEarth-Logo-1.jpg"
        }
        else if (contests[item].site == "CodeForces") {
            image = "https://res.cloudinary.com/practicaldev/image/fetch/s--N2_RJe5R--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cer3l19eex0wy900b101.jpg"
        }
        else if (contests[item].site == "CodeChef") {
            image = "https://www.justalternativeto.com/wp-content/uploads/2021/07/CodeChef-735x400.jpg"
        }
        else if (contests[item].site == "LeetCode") {
            image = "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy9ENjdwZWNlaWJlSVFJRGRNaWJiYW9kN3ZFaG4xRTN2UFNBMEE4N3ROamNLT0MyRm54WVFoeVJpYm5GeVJ0RWRPNXFzZ1VXMXZReDlZaWFQeHBTdFZwWEM4ZVEvNjQw?x-oss-process=image/format,png"
        }
        else if (contests[item].site == "AtCoder") {
            image = "https://th.bing.com/th/id/OIP.6wIIYDHImS7L8spOSn22owAAAA?pid=ImgDet&rs=1"
        }
        else if (contests[item].site == "Kick Start") {
            image = "https://th.bing.com/th/id/R.ac5c9a0b19b9d097c3773012af41762f?rik=haRjvpYMcaQIcA&riu=http%3a%2f%2fwww.logoed.co.uk%2fwp-content%2fuploads%2f2014%2f04%2f22.jpg&ehk=hJFp5SP4sK%2b4YQHaawxYkSF1tud6hXng987i9Ii05rQ%3d&risl=&pid=ImgRaw&r=0"
        }
        else {
            image = "https://th.bing.com/th/id/OIP.4ht5Ir66opgXTUjRl8fn7QHaD3?pid=ImgDet&rs=1"
        }


        ihtml += `
      
            <div class="card mx-2  my-2" style="width: 22rem; height:30rem; ">
                <img class="card-img-top " src="${image}" width = 500 height = 200 alt="Card image cap">
                <div class="card-body border border-warning ">
                    <h5 class="card-title">${contests[item].name.slice(0, 28)}...</h5>
                    <p class="font-weight-bold"> Contest Organizer: ${contests[item].site}</p>
                    <p class="font-weight-bold text-danger"> Start at: ${contests[item].start_time} </p>
                    <p class="font-weight-bold text-danger"> Ends at: ${contests[item].end_time} </p>
                    <p > Status: ${contests[item].status} </p>
                    <a href="${contests[item].url}" class="btn btn-primary">Go to contest</a>
                </div>
            </div>
           
        `
    }
    cardContainer.innerHTML = ihtml
})

function sendEmail() {
    let a = document.getElementById("email").value
    let b = document.getElementById("query").value
    // Email.send({
    //     Host: "smtp.gmail.com",
    //     Username: "shounakp2@gmail.com",
    //     Password: "Password@2611",
    //     To: 'shounakp2611@gmail.com',
    //     From: `${a}`,
    //     Subject: "Mail from site",
    //     Body: `${b}`
    // }).then(
    //     message => alert(message)
    // );
    alert("Message sent successfully")
}

const search = () => {
    let searchItem = document.getElementById("data-search").value.toLowerCase()
    console.log(searchItem)
    console.log(user)
    user.forEach(yy => {
        const isVisible = yy.name.toLowerCase().includes(searchItem) || yy.site.toLowerCase().includes(searchItem) || yy.status.toLowerCase().includes(searchItem) || yy.start_time.includes(searchItem) || yy.end_time.includes(searchItem)

        user[yy].element.classList.toggle("hide", !isVisible)
    })
}
