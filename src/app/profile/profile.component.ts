import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export class Courses{
  headerName:string;
  hours:number;
  skills:Array<string>;
  description:string;
  location:string;
}

export class Jobs{
  headerName:string;
  experience:string;
  salary:string;
  skills:Array<string>;
  description:string;
  location:string;
}

export class Review{
  headerName:string;
  skills:Array<string>;
  description:string;
  candidateImage:string;
  candidateName:string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  courses:Courses[]=[
    {
      headerName:"Data Science",
      hours:80,
      skills:["Python","ML","SQL"],
      description:"Reliance jio is an industry leader in implementing end-to-end solutions for various verticals with a holistic approach. With a wide range of technological and domain expertise and practical experience, OSS offers cutting edge products and services.",
      location:"Madiwal"
    },
    {
      headerName:"Machine Learning",
      hours:80,
      skills:["Python","ML","SQL"],
      description:"Reliance jio is an industry leader in implementing end-to-end solutions for various verticals with a holistic approach. With a wide range of technological and domain expertise and practical experience, OSS offers cutting edge products and services.",
      location:"Bangalore"
    },
    {
      headerName:"Big Data",
      hours:80,
      skills:["Python","ML","SQL"],
      description:"Reliance jio is an industry leader in implementing end-to-end solutions for various verticals with a holistic approach. With a wide range of technological and domain expertise and practical experience, OSS offers cutting edge products and services.",
      location:"Marathahalli"
    },
    {
      headerName:"Hadoop",
      hours:80,
      skills:["Python","ML","SQL"],
      description:"Reliance jio is an industry leader in implementing end-to-end solutions for various verticals with a holistic approach. With a wide range of technological and domain expertise and practical experience, OSS offers cutting edge products and services.",
      location:"HSR layout"
    },
    {
      headerName:"Power BI",
      hours:80,
      skills:["Python","ML","SQL"],
      description:"Reliance jio is an industry leader in implementing end-to-end solutions for various verticals with a holistic approach. With a wide range of technological and domain expertise and practical experience, OSS offers cutting edge products and services.",
      location:"BTM 2nd Stage"
    },
    {
      headerName:"Tableau",
      hours:80,
      skills:["Python","ML","SQL"],
      description:"Reliance jio is an industry leader in implementing end-to-end solutions for various verticals with a holistic approach. With a wide range of technological and domain expertise and practical experience, OSS offers cutting edge products and services.",
      location:"Koramagal"
    },
  ]


  jobs:Jobs[]=[
    {
      headerName:"IT Project Manager",
      experience: "2+",
      skills:[
        "Android",
        "Java"
      ],
      description:"Reliance jio is an industry leader in implementing end-to-end solutions for various verticals with a holistic approach. With a wide range of technological and domain expertise and practical experience, OSS offers cutting edge products and services.",
      location:"Bangalore",
      salary:"₹4.2L – ₹2.4L"
    },
    {
      headerName:"Android Developer",
      experience: "2+",
      skills:[
        "Android",
        "Java"
      ],
      description:"Reliance jio is an industry leader in implementing end-to-end solutions for various verticals with a holistic approach. With a wide range of technological and domain expertise and practical experience, OSS offers cutting edge products and services.",
      location:"Bangalore",
      salary:"₹4.2L – ₹2.4L"
    },
  ]

  reviews:Review[]=[
    {
      headerName:"Qualified trainers, Awesome place to learn",
      skills:[
        "Android",
        "Java"
      ],
      description:"Reliance jio is an industry leader in implementing end-to-end solutions for various verticals with a holistic approach. With a wide range of technological and domain expertise and practical experience, OSS offers cutting edge products and services.",
      candidateImage:"assets/github.svg",
      candidateName:"Santosh Basme"
    },
    {
      headerName:"One to one sessions are helpful",
      skills:[
        "Android",
        "Java"
      ],
      description:"Reliance jio is an industry leader in implementing end-to-end solutions for various verticals with a holistic approach. With a wide range of technological and domain expertise and practical experience, OSS offers cutting edge products and services.",
      candidateImage:"assets/github.svg",
      candidateName:"Santosh Basme"
    },
  ]
  
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  constructor(private fb:FormBuilder) { }



  ngOnInit() {
    this.formGroup = this.fb.group({
      name:[null,[Validators.required]],
      mobileNo:[null,[Validators.required]],
      subject:[null,[Validators.required]],
      message:[null],
    })
  }

  onSubmit(value){
    console.log(value)
  }

}
