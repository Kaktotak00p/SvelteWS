<div class="w-full inline-flex flex-col justify-start items-start gap-10">
    <div class="self-stretch justify-start text-white text-4xl font-normal font-['Craftwork_Grotesk'] uppercase">//:Партнери</div>
    <div class="partners-scroll">
        <div class="scroll-track">
          <div class="track">
            <div class="partner-block">
              <img src="/images/partners/1xBet.svg" class="h-[216px] w-[216px]" />
            </div>
            <div class="partner-block">
              <img src="/images/partners/1xCasino.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/A-.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/BC.game.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/BetmenAffiliates.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/Digika.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/DoItPartners.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/MelBet.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/MioMedia.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/NPartners.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/RocksPartners.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/UNO.svg" class="h-[216px] w-[216px]"/>
            </div>
          </div>
          <div class="track">
            <div class="partner-block">
              <img src="/images/partners/1xBet.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
              <img src="/images/partners/1xCasino.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/A-.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/BC.game.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/BetmenAffiliates.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/Digika.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/DoItPartners.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/MelBet.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/MioMedia.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/NPartners.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/RocksPartners.svg" class="h-[216px] w-[216px]"/>
            </div>
            <div class="partner-block">
                <img src="/images/partners/UNO.svg" class="h-[216px] w-[216px]"/>
            </div>
          </div>
        </div>
    </div>
</div>

<style>
@keyframes scroll {
  from { transform: translateX(0);     }
  to   { transform: translateX(-3000px);  }
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
  width: 3000px;                /*  half of .scroll-track’s width */
}

.partner-block {
  /* your existing sizing… */
  width: 216px;
  height: 216px;
  position: relative;
}

</style>