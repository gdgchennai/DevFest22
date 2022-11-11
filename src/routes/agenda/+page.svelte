<script>
  import ItemAgendaCard from '$lib/section/agenda/ItemAgendaCard.svelte';

  const dayOneAgenda = [
    {
      name: 'Registration',
      session: 'First come first serve basis',
      time: '8:00 AM - 8:55 AM'
    },
    {
      name: 'Opening note',
      session: 'Vanakkam to DevFest Chennai 2022!!',
      time: '9:05 AM - 9:15 AM'
    },
    {
      name: 'Manikandan Krishnamurthy',
      session: 'Multi-team platform on GKE',
      imageUrl: '/profile_pics/Manikandan_Krishnamurthy.png',
      showImage: true,
      time: '9:20 AM - 09:55 AM'
    },
    {
      name: 'Anush Arvind, Arumugaraja Thirumani, Ritikesh G',
      session: 'Scaling from 10k RPM to 150k RPM',
      imageUrl: '/profile_pics/Anush_Aravind.png',
      imageUrl2: '/profile_pics/Arumgaraja_Thirumani.png',
      imageUrl3: '/profile_pics/Ritikesh_G.png',
      showImage: true,
      showMultipleImage: true,
      time: '10:00 AM - 10:35 AM'
    },
    {
      name: 'Praveen Thirumurugan',
      session: 'Microservice orchestration with GCP\'s serverless offerings',
      imageUrl: '/profile_pics/Praveen_Thirumurugan.png',
      showImage: true,
      time: '10:40 AM - 11:15 AM'
    },
    {
      name: 'Arun Ganesh',
      session: 'Streaming XR using edge cloud',
      imageUrl: '/profile_pics/Arun_Ganesh.png',
      showImage: true,
      time: '11:20 AM - 11:55 AM'
    },
    {
      name: 'Joinal Ahmed',
      session: 'Take Data to the next level with Graph Machine Learning',
      imageUrl: '/profile_pics/Joinal_Ahmed.png',
      showImage: true,
      time: '12:00 PM - 12:35 PM'
    },
    {
      name: 'Vasudev Maduri',
      session: 'Ensuring Reliability of Large Scale ML Systems',
      imageUrl: '/profile_pics/Vasudev_Maduri.png',
      showImage: true,
      time: '12:40 PM - 1:15 PM'
    },
    {
      name: 'Lunch',
      session: 'Time to feast yourself and prepare for what\'s coming next',
      time: '1:15 PM - 2:15 PM'
    },
    {
      name: 'Abhishek Mishra',
      session: 'An artless introduction to distributed SQL database',
      imageUrl: '/profile_pics/Abishek_Mishra.png',
      showImage: true,
      time: '2:15 PM - 2:40 PM'
    },
    {
      name: 'Anam Saatvik Reddy',
      session: 'Lightning talk - TensorFlow Recommenders - a simple library for building powerful recommendation systems',
      imageUrl: '/profile_pics/Anam_Saatvik_Reddy.png',
      showImage: true,
      time: '2:45 PM - 2:55 PM'
    },
    {
      name: 'Karthikeyan S',
      session: 'Lightning talk - Video calls Demystified; A peak into WebRTC',
      imageUrl: '/profile_pics/Karthikeyan_S.png',
      showImage: true,
      time: '2:55 PM - 3:05 PM'
    },
    {
      name: 'Ramachandran A',
      session: 'Lightning talk - Scaling Web3 development with GCP',
      imageUrl: '/profile_pics/Ramachandran_A.png',
      showImage: true,
      time: '3:05 PM - 3:20 PM'
    },
    {
      name: 'Networking and Tea break',
      session: 'Connect - Interact and expand your clan!',
      time: '3:25 PM - 4:00 PM'
    },
    {
      name: 'Fun activities/Quiz',
      session: 'Enough lectures, It\'s play time!',
      time: '4:05 PM - 4:40 PM'
    },
    {
      name: 'Closing Note',
      session: 'Thank you for sticking with us this far!',
      time: '4:40 PM - 4:50 PM'
    },
  ];
</script>

<svelte:head>
  <title>GDG Chennai - Agenda</title>
  <meta name="Event agenda" content="GDG Chennai - Event agenda" />
</svelte:head>

<div class="flex flex-col justify-start space-y-10 overflow-hidden p-8">
  <h2
    class="w-full py-8 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-center lg:text-5xl"
  >
    Agenda
  </h2>
  <div class="event_area">
    <div class="container mx-auto">
      <div class="double_line">
        <div class="row">
          <div class="date mb-8">
            <h3>12 Nov 2022</h3>
            <h2>Track 1</h2>
          </div>
          {#each dayOneAgenda as speaker}
            <ItemAgendaCard
              session={speaker.session}
              name={speaker.name}
              imageUrl={speaker.imageUrl}
              imageUrl2={speaker.imageUrl2}
              imageUrl3={speaker.imageUrl3}
              time={speaker.time}
              showImage={speaker.showImage}
              showMultipleImage={speaker.showMultipleImage}
            />
          {/each}
          <!-- <div class="single_speaker">
            <img
              class="h-24 w-24 rounded-3xl"
              src="/profile_pics/Vasudev_Maduri.png"
              alt=""
            />
            <div class="speaker-name">
              <div class="heading flex items-center justify-between">
                <span>Abhishek</span>
                <div class="time">10-11 am</div>
              </div>
              <p>Lorem ipsum cuz why not</p>
            </div>
          </div> -->
        </div>
      </div>
      <div class="row">
        <div class="col-xl-3 col-lg-3">
          <div class="date">
            <h3>13 Nov 2022</h3>
          </div>
        </div>
        <div class="col-xl-9 col-lg-9">
          <div class="single_speaker">
            <img
              class="h-24 w-24 rounded-3xl"
              src="/profile_pics/Vasudev_Maduri.png"
              alt=""
            />
            <div class="speaker-name">
              <div class="heading flex items-center justify-between">
                <span>John snow</span>
                <div class="time">10-11 am</div>
              </div>
              <p>Another set of Lorem Ipsum</p>
            </div>
          </div>
          <div class="single_speaker">
            <img
              class="h-24 w-24 rounded-3xl"
              src="/profile_pics/Vasudev_Maduri.png"
              alt=""
            />
            <div class="speaker-name">
              <div class="heading flex items-center justify-between">
                <span>Arya Stark</span>
                <div class="time">12-1.00 pm</div>
              </div>
              <p>Another set of Lorem Ipsum</p>
            </div>
          </div>
          <div class="single_speaker">
            <img
              class="h-24 w-24 rounded-3xl"
              src="/profile_pics/Vasudev_Maduri.png"
              alt=""
            />
            <div class="speaker-name">
              <div class="heading flex items-center justify-between">
                <span>Gandalf</span>
                <div class="time">2.30-4.00 pm</div>
              </div>
              <p>Another set of Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .event_area {
    position: relative;
    padding-bottom: 120px;
  }

  @media (max-width: 767px) {
    .event_area {
      padding-bottom: 60px;
    }
  }

  .event_area .double_line::before,
  .event_area .double_line::after {
    background: #ff9600;
    background: -moz-linear-gradient(
      left,
      #ff9600 0%,
      #fe531e 26%,
      #c022a5 57%,
      #1bb8f9 100%
    );
    background: -webkit-linear-gradient(
      left,
      #ff9600 0%,
      #fe531e 26%,
      #c022a5 57%,
      #1bb8f9 100%
    );
    background: linear-gradient(
      to right,
      #ff9600 0%,
      #fe531e 26%,
      #c022a5 57%,
      #1bb8f9 100%
    );
  }

  .event_area .double_line {
    position: relative;
    z-index: 9;
    padding-top: 100px;
    padding-bottom: 20px;
    margin-bottom: 100px;
  }

  @media (max-width: 767px) {
    .event_area .double_line {
      padding-top: 40px;
      margin-bottom: 20px;
    }
  }

  .event_area .double_line::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 10px;
    top: 0;
    left: 0;
  }

  .event_area .double_line::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 10px;
    bottom: 0;
    left: 0;
  }

  .event_area .date h3 {
    font-size: 26px;
    font-weight: 500;
    color: #ff0000;
  }

  .event_area .date h2 {
    font-size: 20px;
    font-weight: 500;
    color: #0022ff;
  }

  @media (max-width: 767px) {
    .event_area .date h3 {
      margin-bottom: 20px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .event_area .date h3 {
      margin-bottom: 30px;
    }
  }

  .event_area .single_speaker {
    margin-bottom: 63px;
  }

  @media (max-width: 767px) {
    .event_area .single_speaker {
      margin-bottom: 30px;
    }
  }

  .event_area .single_speaker img {
    float: left;
  }

  @media (max-width: 767px) {
    .event_area .single_speaker img {
      float: none;
    }
  }

  .event_area .single_speaker .speaker-name {
    padding-left: 30px;
    overflow: hidden;
  }

  @media (max-width: 767px) {
    .event_area .single_speaker .speaker-name {
      padding-left: 0;
      margin-top: 20px;
    }
  }

  .event_area .single_speaker .speaker-name .heading {
    margin-bottom: 5px;
  }

  .event_area .single_speaker .speaker-name .heading span {
    font-size: 26px;
    color: #1f1f1f;
    font-weight: 500;
  }

  .event_area .single_speaker .speaker-name .heading .time {
    font-size: 16px;
    font-weight: 500;
    color: #1f1f1f;
  }

  .event_area .single_speaker p {
    color: #707070;
    font-size: 16px;
    line-height: 28px;
  }
</style>
