<svelte:head>
  <title>GDG Chennai - Agenda</title>
  <meta name="Event agenda" content="GDG Chennai - Event agenda" />
</svelte:head>
<div class="flex flex-col justify-start space-y-10 overflow-hidden p-8">
  <h2
    class="w-full text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-center lg:text-5xl py-8"
  >
    Agenda
  </h2>
  <div class="event_area">
    <div class="container mx-auto">
      <div class="double_line">
        <div class="row">
          <div class="date">
            <h3>12 Nov 2022</h3>
          </div>
          <div class="single_speaker">
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
          </div>
          <div class="single_speaker">
            <img
              class="h-24 w-24 rounded-3xl"
              src="/profile_pics/Vasudev_Maduri.png"
              alt=""
            />
            <div class="speaker-name">
              <div class="heading flex items-center justify-between">
                <span>John Doe</span>
                <div class="time">12-1.00 pm</div>
              </div>
              <p>Lorem ipsum cuz why not</p>
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
                <span>Varun</span>
                <div class="time">2.30-4.00 pm</div>
              </div>
              <p>Lorem ipsum cuz why not</p>
            </div>
          </div>
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
