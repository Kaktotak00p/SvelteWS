<div class="section-small">
  <div class="frame-102">
    <div class="frame-101">
      <div class="text-"><span class="fspan">//:Партнери</span></div>
      <div class="partners-scroll">
        <div class="scroll-track">
            <!-- first set of logos -->
            <img class="partner-logo" src="https://placehold.co/216x216" />
            <img class="partner-logo" src="https://placehold.co/216x216" />
            <img class="partner-logo" src="https://placehold.co/216x216" />
            <img class="partner-logo" src="https://placehold.co/216x216" />
            <img class="partner-logo" src="https://placehold.co/216x216" />
            <img class="partner-logo" src="https://placehold.co/216x216" />
            <img class="partner-logo" src="https://placehold.co/216x216" />
            <img class="partner-logo" src="https://placehold.co/216x216" />
            <img class="partner-logo" src="https://placehold.co/216x216" />
            <img class="partner-logo" src="https://placehold.co/216x216" />
            <img class="partner-logo" src="https://placehold.co/216x216" />
            <img class="partner-logo" src="https://placehold.co/216x216" />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
 .partners-scroll {
  position: relative;
  overflow: hidden;    
  width: 100%;
}

.scroll-track {
  display: flex;
  gap: 10%;
  animation: scroll 30s linear infinite;
}

.scroll-track:hover {
  animation-play-state: paused; 
}

@keyframes scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.partner-logo {
  width: 216px;
  height: 216px;
}  
.section-small {
  min-height: 400px;
  }
.fspan {
    color: white;
    font-size: 36px;
    font-family: Craftwork Grotesk;
    font-weight: 400;
    text-transform: uppercase;
    word-wrap: break-word;
}

.text- {
    align-self: stretch;
}

.frame-101 {
    width: 100%;
    left: 0px;
    top: 0px;
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
}

.frame-102 {
    width: 100%;
    height: 100%;
    position: relative;
}
</style>