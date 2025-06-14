<div class="w-full h-64 relative bg-black overflow-hidden">
  <div class="w-[95%] mx-auto justify-start text-white text-3xl font-normal font-['Craftwork_Grotesk'] uppercase">//:Партнери</div>
  <div class="w-[1454px] left-[15px] top-[33px] absolute inline-flex flex-col justify-start items-start gap-5">
    <div class="partners-scroll">
        <div class="scroll-track">
          <div class="track">
            <div class="partner-block">
              <img src="/images/partners/1xBet.svg" />
            </div>
            <div class="partner-block">
              <img src="/images/partners/1xCasino.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/A-.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/BC.game.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/BetmenAffiliates.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/Digika.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/DoItPartners.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/MelBet.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/MioMedia.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/NPartners.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/RocksPartners.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/UNO.svg"/>
            </div>
          </div>
          <div class="track">
            <div class="partner-block">
              <img src="/images/partners/1xBet.svg"/>
            </div>
            <div class="partner-block">
              <img src="/images/partners/1xCasino.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/A-.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/BC.game.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/BetmenAffiliates.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/Digika.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/DoItPartners.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/MelBet.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/MioMedia.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/NPartners.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/RocksPartners.svg"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/UNO.svg"/>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>


<style>
@keyframes scroll {
  from { transform: translateX(0);     }
  to   { transform: translateX(-1800px);  }
}
.partners-scroll {
  width: 100%;
  overflow: hidden;           /* hide the “seam” */
}

.scroll-track {
  display: flex;
  width: 200%;               /* two copies side by side */
  animation: scroll 15s linear infinite;
}

.scroll-track:hover {
  animation-play-state: paused;
}

.track {
  display: flex;
  justify-content: space-around;
  flex: none;                /* don’t shrink */
  width: 1800px;                /*  half of .scroll-track’s width */
}

.partner-block {
  /* your existing sizing… */
  width: 140px;
  height: 140px;
  position: relative;
}

</style>