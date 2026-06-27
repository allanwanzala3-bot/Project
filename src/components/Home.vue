<template>
  <section class="page home-page">
    <div class="hero-card">
      <img src="/ken.jpg" alt="Kennedy Odunga" class="profile-photo" />
      <div class="hero-copy">
    
        
        <p class="lead">I have 14 years of professional experience in the telecommunications industry in Africa, the first 7 years as a RAN network 
design and optimization engineer and the recent 7 years as a sales team business development manager. In these roles, I 
have been involved in developing market strategy, business case modelling and decision making and team leadership.  
In have an undergraduate degree in Electrical and Electronic Engineering and a post graduate MBA in strategic 
management. I also hold a Master of Science post graduate degree in Telecommunication Innovation from Strathmore 
university in Kenya.  I am a hard worker and a fast learner, and I always look forward to embracing new challenges as key 
learning opportunities. I am very passionate about my customers.</p>
      </div>
      <div>
         <p>Email: kodunga@gmail.com</p>
      <p >Phone: +254 791433849</p>
      <p>Location: Nairobi, Kenya</p>
      <p></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-page {
  padding: 2rem;
}

.hero-card {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  align-items: center;
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.profile-photo {
  width: 100%;
  border-radius: 16px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #2563eb;
  font-weight: 700;
  font-size: 0.8rem;
}

h1 {
  font-size: 2.2rem;
  margin: 0.3rem 0 0.7rem;
}

.lead {
  font-size: 1.1rem;
  color: #334155;
}

@media (max-width: 768px) {
  .hero-card {
    grid-template-columns: 1fr;
  }
}
</style>