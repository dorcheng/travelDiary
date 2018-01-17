const introWrapper = svgContainer.append('g')
  .attr('class', 'introWrapper')
  .attr('transform', 'translate(110,90)');

const descriptionWrapper = svgContainer.append('g')
  .attr('class', 'descriptionWrapper')
  .attr('transform', 'translate(110,160)');

const pageTitle = introWrapper.append('text')
  .attr('class', 'pageTitle')
  .attr('font-size', '34px')
  .attr('font-weight', 700)
  .attr('text-anchor', 'start')
  .attr('letter-spacing', 3.5)
  .attr('fill', '#232B3F')
  .text('MY TRAVELS SINCE 2015');

const intro = introWrapper.selectAll('.intro')
  .data(introData)
  .enter()
  .append('text');

const introAttributes = intro
  .attr('class', 'intro')
  .attr('y', d => d.y)
  .attr('text-anchor', 'start')
  .attr('font-size', '11px')
  .attr('fill', '#232B3F')
  .attr('letter-spacing', 0.30)
  .text(d => d.text);

const description = descriptionWrapper.selectAll('.description')
  .data(descriptionData)
  .enter()
  .append('text');

const descriptionAttributes = description
  .attr('class', 'description')
  .attr('y', d => d.y)
  .attr('text-anchor', 'start')
  .attr('font-size', '11px')
  .attr('fill', '#232B3F')
  .attr('letter-spacing', 0.20)
  .text(d => d.text);

const xScale = d3.scaleBand()
  .domain(timelineData.map(node => node.text))
  .rangeRound([0, 940])
  .padding(0.1);

const xAxis = d3.axisBottom()
  .scale(xScale)
  .tickSize(0);

const timelineWrapper = svgContainer.append('g')
  .attr('class', 'timelineWrapper')
  .style('fill', 'url(#linear-gradient)')
  .attr('transform', 'translate(245, 110)');

const vacaPoints = timelineWrapper.append('g')
  .attr('class', 'vacaPoints')
  .attr('transform', 'translate(0, 230)');

const instruction = vacaPoints.append('g')
  .attr('class', 'instructionWrapper')
  .attr('transform', 'translate(0, 60)');

createText(instruction, 0, 8, 60, 'Did not travel');
createText(instruction, 0, 8, 75, 'during blurry');
createText(instruction, 0, 8, 90, 'months :(');

const reminder = vacaPoints.append('g')
  .attr('class', 'reminderWrapper')
  .attr('transform', 'translate(0, 60)');

createText(reminder, 6, 300, 60, 'Remember');
createText(reminder, 6, 300, 75, 'to use the');
createText(reminder, 6, 300, 90, 'decoder!');

const playaDelCarmenWrapper = vacaPoints.append('g')
  .attr('class', 'playaDelCarmenWrapper')
  .attr('transform', 'translate(15, 60)');

const playaDelCarmenBuddy = playaDelCarmenWrapper.append('g')
  .attr('class', 'playaDelCarmenBuddy')
  .attr('transform', 'translate(0, 45)');

createFriends(playaDelCarmenBuddy, 102, 8, 105, 8, 112, 4, '#cfd673');

const playaDelCarmenPurpose = playaDelCarmenWrapper.append('g')
  .attr('class', 'playaDelCarmenPurpose')
  .attr('transform', 'translate(65, 38)');

createVacaPurpose(playaDelCarmenPurpose, 14, 15, 5, 15, 8, 15, '#E6A132');
createDeparture(playaDelCarmenWrapper, 'playaDelCarmen', 71, 30, '#fc6a64');
createArrival(playaDelCarmenWrapper, 'playaDelCarmen', 82, 30, '#F5E4A1');
createMood(playaDelCarmenWrapper, 'playaDelCarmen', 71, 21, '#f5e6b5');
createDuration(playaDelCarmenWrapper, 'playaDelCarmen', 71, 89, 12);
createText(playaDelCarmenWrapper, 1, 70, -26, 'Mar 2 - 6:');
createText(playaDelCarmenWrapper, 1, 70, -11, 'First time abroad');
createText(playaDelCarmenWrapper, 1, 70, 4, 'with friends');
createHideCity(playaDelCarmenWrapper, 1, 75, 75, 70, 21);

const puntaCanaWrapper = vacaPoints.append('g')
  .attr('class', 'puntaCanaWrapper')
  .attr('transform', 'translate(58, 343)');

const puntaCanaBuddy = puntaCanaWrapper.append('g')
  .attr('class', 'puntaCanaBuddy')
  .attr('transform', 'translate(5, 36)');

createMom(puntaCanaBuddy, 115, 7, 115, 11, 115, 19);
createDad(puntaCanaBuddy, 139, 7, 139, 11, 139, 19);

const puntaCanaPurpose = puntaCanaWrapper.append('g')
  .attr('class', 'puntaCanaPurpose')
  .attr('transform', 'translate(80, 29)');

createVacaPurpose(puntaCanaPurpose, 14, 15, 5, 15, 8, 15, '#E6A132');
createDeparture(puntaCanaWrapper, 'puntaCana', 86, 57, '#fc6a64');
createArrival(puntaCanaWrapper, 'puntaCana', 97, 57, '#FC955E');
createMood(puntaCanaWrapper, 'puntaCana', 86, 68, '#f5e6b5');
createDuration(puntaCanaWrapper, 'puntaCana', 86, 8, 12);
createText(puntaCanaWrapper, 2, 86, 100, 'May 23 - 25:');
createText(puntaCanaWrapper, 2, 86, 115, 'Annual company trip');
createText(puntaCanaWrapper, 2, 86, 130, "with the 'rents");
createHideCity(puntaCanaWrapper, 2, 75, 75, 85, 5);

const sanFranWrapper = vacaPoints.append('g')
  .attr('class', 'sanFranWrapper')
  .attr('transform', 'translate(83, 47)');

const sanFranPurpose = sanFranWrapper.append('g')
  .attr('class', 'sanFranPurpose')
  .attr('transform', 'translate(80, 18)');

createCareerPurpose(sanFranPurpose, 7, 6, 7, 23);
createDeparture(sanFranWrapper, 'sanFran', 86, 10, '#F97A71');
createArrival(sanFranWrapper, 'sanFran', 97, 10, '#c7e0cd');
createMood(sanFranWrapper, 'sanFran', 86, 1, '#f5e6b5');
createDuration(sanFranWrapper, 'sanFran', 86, 69, 55);
createText(sanFranWrapper, 3, 86, -47, 'Jun 2 - Aug 28:');
createText(sanFranWrapper, 3, 86, -32, 'Zynga internship');
createText(sanFranWrapper, 3, 86, -17, 'First time living in SF');
createHideCity(sanFranWrapper, 3, 75, 75, 86, 0);

const cancunWrapper = vacaPoints.append('g')
  .attr('class', 'cancunWrapper')
  .attr('transform', 'translate(308, 27)');

const cancunBuddy = cancunWrapper.append('g')
  .attr('class', 'cancunBuddy')
  .attr('transform', 'translate(0, 45)');

createFriends(cancunBuddy, 102, 8, 105, 8, 112, 4, '#cfd673');

const cancunPurpose = cancunWrapper.append('g')
  .attr('class', 'cancunPurpose')
  .attr('transform', 'translate(65, 38)');

createVacaPurpose(cancunPurpose, 14, 15, 5, 15, 8, 15, '#E6A132');
createDeparture(cancunWrapper, 'cancun', 71, 30, '#fc6a64');
createArrival(cancunWrapper, 'cancun', 82, 30, '#36BCBB');
createMood(cancunWrapper, 'cancun', 71, 21, '#f5e6b5');
createDuration(cancunWrapper, 'cancun', 71, 89, 12, '#FCB9A4');
createText(cancunWrapper, 7, 70, -27, 'Feb 27 - Mar 3:');
createText(cancunWrapper, 7, 70, -12, 'Senior year spring');
createText(cancunWrapper, 7, 70, 3, 'break trip!');
createHideCity(cancunWrapper, 7, 75, 75, 70, 20);

const arubaWrapper = vacaPoints.append('g')
  .attr('class', 'arubaWrapper')
  .attr('transform', 'translate(338, 344)');

const arubaBuddy = arubaWrapper.append('g')
  .attr('class', 'arubaBuddy')
  .attr('transform', 'translate(5, 36)');

createMom(arubaBuddy, 115, 7, 115, 11, 115, 19);
createDad(arubaBuddy, 139, 7, 139, 11, 139, 19);

const arubaPurpose = arubaWrapper.append('g')
  .attr('class', 'arubaPurpose')
  .attr('transform', 'translate(80, 29)');

createVacaPurpose(arubaPurpose, 14, 15, 5, 15, 8, 15, '#E6A132');
createDeparture(arubaWrapper, 'aruba', 86, 57, '#fc6a64');
createArrival(arubaWrapper, 'aruba', 97, 57, '#B7AF70');
createMood(arubaWrapper, 'aruba', 86, 68, '#f5e6b5');
createDuration(arubaWrapper, 'aruba', 86, 8, 12, '#FDC9B2');
createText(arubaWrapper, 8, 86, 100, 'May 27 - 30:');
createText(arubaWrapper, 8, 86, 115, 'Annual company trip');
createText(arubaWrapper, 8, 86, 130, "with the 'rents");
createHideCity(arubaWrapper, 8, 75, 75, 85, 5);

const chicagoWrapper = vacaPoints.append('g')
  .attr('class', 'chicagoWrapper')
  .attr('transform', 'translate(395, 80)');

const chicagoDuration = chicagoWrapper.append('g')
  .style('fill', 'url(#chicagoGradient)')
  .style('stroke', 'url(#chicagoGradient)');

const chicagoPurpose = chicagoWrapper.append('g')
  .attr('class', 'chicagoPurpose')
  .attr('transform', 'translate(80, 18)');

createCareerPurpose(chicagoPurpose, 7, 6, 7, 23);
createDeparture(chicagoWrapper, 'chicago', 86, 10, '#F97A71');
createArrival(chicagoWrapper, 'chicago', 97, 10, '#F5C59D');
createMood(chicagoWrapper, 'chicago', 86, 1, '#e9d9bb');
createDuration(chicagoDuration, 'chicago', 86, 69, 274);
createText(chicagoWrapper, 9, 86, -46, 'Jul 2 - Jul 17:');
createText(chicagoWrapper, 9, 86, -31, 'United Airlines job');
createText(chicagoWrapper, 9, 86, -16, 'First time living in IL');
createHideCity(chicagoWrapper, 9, 275, 75, 85, 0);

const portlandWrapper = vacaPoints.append('g')
  .attr('class', 'portlandWrapper')
  .attr('transform', 'translate(420, 376)');

const portlandBuddy = portlandWrapper.append('g')
  .attr('class', 'portlandBuddy')
  .attr('transform', 'translate(5, 36)');

createSO(portlandBuddy, 112, 6, 109.4, -2.3);

const portlandPurpose = portlandWrapper.append('g')
  .attr('class', 'portlandPurpose')
  .attr('transform', 'translate(80, 29)');

createVacaPurpose(portlandPurpose, 14, 15, 5, 15, 8, 15, '#E6A132');
createDeparture(portlandWrapper, 'portland', 86, 57, '#F5C59D');
createArrival(portlandWrapper, 'portland', 97, 57, '#96806C');
createMood(portlandWrapper, 'portland', 86, 68, '#f5e6b5');
createDuration(portlandWrapper, 'portland', 86, 8, 24, '#D1D1BE');
createText(portlandWrapper, 10, 86, 100, 'Sep 1 - 6:');
createText(portlandWrapper, 10, 86, 115, 'Labor Day road trip');
createText(portlandWrapper, 10, 86, 130, 'Saw so many stars');
createText(portlandWrapper, 10, 86, 145, 'at night!');
createHideCity(portlandWrapper, 10, 75, 75, 85, 1);

const denverWrapper = vacaPoints.append('g')
  .attr('class', 'denverWrapper')
  .attr('transform', 'translate(473, 344)');

const denverBuddy = denverWrapper.append('g')
  .attr('class', 'denverBuddy')
  .attr('transform', 'translate(5, 36)');

createSO(denverBuddy, 112, 6, 109.4, -2.3);

const denverPurpose = denverWrapper.append('g')
  .attr('class', 'denverPurpose')
  .attr('transform', 'translate(80, 29)');

createVacaPurpose(denverPurpose, 14, 15, 5, 15, 8, 15, '#E6A132');
createDeparture(denverWrapper, 'denver', 86, 57, '#F5C59D');
createArrival(denverWrapper, 'denver', 97, 57, '#7BADAF');
createMood(denverWrapper, 'denver', 86, 68, '#f5e6b5');
createDuration(denverWrapper, 'denver', 86, 8, 10, '#C0D1BF');
createText(denverWrapper, 11, 85, 100, 'Oct 1 - 3:');
createText(denverWrapper, 11, 85, 115, 'Drake & Future');
createText(denverWrapper, 11, 85, 130, 'concert. Tbh, the real');
createText(denverWrapper, 11, 85, 145, 'reason was to see dvsn');
createHideCity(denverWrapper, 11, 75, 75, 85, 1);

const houstonWrapper = vacaPoints.append('g')
  .attr('class', 'houstonWrapper')
  .attr('transform', 'translate(506, 27)');

const houstonBuddy = houstonWrapper.append('g')
  .attr('class', 'houstonBuddy')
  .attr('transform', 'translate(0, 45)');

const houstonPurpose = houstonWrapper.append('g')
  .attr('class', 'houstonPurpose')
  .attr('transform', 'translate(65, 38)');

createVacaPurpose(houstonPurpose, 14, 15, 5, 15, 8, 15, '#E6A132');
createDeparture(houstonWrapper, 'houston', 71, 30, '#F5C59D');
createArrival(houstonWrapper, 'houston', 82, 30, '#EFC4D1');
createMood(houstonWrapper, 'houston', 71, 21, '#f5e6b5');
createDuration(houstonWrapper, 'houston', 71, 89, 10, '#B8D1BF');
createText(houstonWrapper, 11, 70, -29, 'Nov 4 - 6:');
createText(houstonWrapper, 11, 70, -12, 'Drove around Houston to');
createText(houstonWrapper, 11, 70, 3, 'take pictures of art murals');
createHideCity(houstonWrapper, 11, 75, 75, 70, 20);

const losAngelesWrapper = vacaPoints.append('g')
  .attr('class', 'losAngelesWrapper')
  .attr('transform', 'translate(549, 377)');

const losAngelesBuddy = losAngelesWrapper.append('g')
  .attr('class', 'losAngelesBuddy')
  .attr('transform', 'translate(5, 36)');

createSO(losAngelesBuddy, 112, 6, 109.4, -2.5);

const losAngelesPurpose = losAngelesWrapper.append('g')
  .attr('class', 'losAngelesPurpose')
  .attr('transform', 'translate(80, 29)');

createVacaPurpose(losAngelesPurpose, 14, 15, 5, 15, 8, 15, '#E6A132');
createDeparture(losAngelesWrapper, 'losAngeles', 86, 57, '#F5C59D');
createArrival(losAngelesWrapper, 'losAngeles', 97, 57, '#F0AC47');
createMood(losAngelesWrapper, 'losAngeles', 86, 68, '#f5e6b5');
createDuration(losAngelesWrapper, 'losAngeles', 86, 8, 24, '#9FD2C2');
createText(losAngelesWrapper, 12, 86, 100, 'Dec 27 - Jan 2:');
createText(losAngelesWrapper, 12, 86, 115, 'Finally got to try the');
createText(losAngelesWrapper, 12, 86, 130, 'cutest maracons from');
createText(losAngelesWrapper, 12, 86, 145, 'Honey & Butter :D!');
createHideCity(losAngelesWrapper, 12, 76, 75, 85, 8);

const seoulWrapper = vacaPoints.append('g')
  .attr('class', 'seoulWrapper')
  .attr('transform', 'translate(612, 27)');

const seoulBuddy = seoulWrapper.append('g')
  .attr('class', 'seoulBuddy')
  .attr('transform', 'translate(-9, 45)');
createSO(seoulBuddy, 112, 6, 109.4, -2.3);
const seoulPurpose = seoulWrapper.append('g')
  .attr('class', 'seoulPurpose')
  .attr('transform', 'translate(66, 38)');

createVacaPurpose(seoulPurpose, 14, 15, 5, 15, 8, 15, '#E6A132');
createDeparture(seoulWrapper, 'seoul', 72, 30, '#F5C59D');
createArrival(seoulWrapper, 'seoul', 83, 30, '#8585B3');
createMood(seoulWrapper, 'seoul', 72, 21, '#f5e6b5');
createDuration(seoulWrapper, 'seoul', 72, 89, 12, '#87D2C4');
createText(seoulWrapper, 13, 70, -29, 'Mar 18 - 26:');
createText(seoulWrapper, 13, 70, -12, 'Ate the best bulgogi');
createText(seoulWrapper, 13, 70, 3, 'of my life omg');
createHideCity(seoulWrapper, 13, 76, 75, 70, 20);

const annArborWrapper = vacaPoints.append('g')
  .attr('class', 'annArborWrapper')
  .attr('transform', 'translate(620, 377)');

const annArborBuddy = annArborWrapper.append('g')
  .attr('class', 'annArborBuddy')
  .attr('transform', 'translate(5, 36)');

const annArborPurpose = annArborWrapper.append('g')
  .attr('class', 'annArborPurpose')
  .attr('transform', 'translate(80, 29)');

createVacaPurpose(annArborPurpose, 14, 15, 5, 15, 8, 15, '#E6A132');
createDeparture(annArborWrapper, 'annArbor', 86, 57, '#F5C59D');
createArrival(annArborWrapper, 'annArbor', 97, 57, '#fc6a64');
createMood(annArborWrapper, 'annArbor', 86, 68, '#f5e6b5');
createDuration(annArborWrapper, 'annArbor', 86, 8, 10, '#7CD1C4');
createText(annArborWrapper, 14, 86, 100, 'Apr 1 - 2:');
createText(annArborWrapper, 14, 86, 115, 'Caught up with');
createText(annArborWrapper, 14, 86, 130, 'old friends');
createHideCity(annArborWrapper, 14, 76, 75, 85, 8);

const cincinnatiWrapper = vacaPoints.append('g')
  .attr('class', 'cincinnatiWrapper')
  .attr('transform', 'translate(694, 27)');

const cincinnatiBuddy = cincinnatiWrapper.append('g')
  .attr('class', 'cincinnatiBuddy')
  .attr('transform', 'translate(0, 45)');

const cincinnatiPurpose = cincinnatiWrapper.append('g')
  .attr('class', 'cincinnatiPurpose')
  .attr('transform', 'translate(65, 38)');

createVacaPurpose(cincinnatiPurpose, 14, 15, 5, 15, 8, 15, '#E6A132');
createDeparture(cincinnatiWrapper, 'cincinnati', 71, 30, '#F5C59D');
createArrival(cincinnatiWrapper, 'cincinnati', 82, 30, '#AD7E9B');
createMood(cincinnatiWrapper, 'cincinnati', 71, 21, '#f5e6b5');
createDuration(cincinnatiWrapper, 'cincinnati', 71, 89, 10, '#78C4BA');
createText(cincinnatiWrapper, 15, 70, -29, 'Jun 23 - 25:');
createText(cincinnatiWrapper, 15, 70, -12, 'Went to my first');
createText(cincinnatiWrapper, 15, 70, 3, 'lantern festival');
createHideCity(cincinnatiWrapper, 15, 76, 75, 70, 20);

const newYorkWrapper = vacaPoints.append('g')
  .attr('class', 'newYorkWrapper')
  .attr('transform', 'translate(693, 377)');

const newYorkDuration = newYorkWrapper.append('g')
  .style('fill', 'url(#newYorkGradient)')
  .style('stroke', 'url(#newYorkGradient)');

const newYorkBuddy = newYorkWrapper.append('g')
  .attr('class', 'newYorkBuddy')
  .attr('transform', 'translate(5, 36)');

createMom(newYorkBuddy, 115, 7, 115, 11, 115, 19);
createDad(newYorkBuddy, 139, 7, 139, 11, 139, 19);

const newYorkPurpose = newYorkWrapper.append('g')
  .attr('class', 'newYorkPurpose')
  .attr('transform', 'translate(80, 29)');

createVacaPurpose(newYorkPurpose, 14, 15, 5, 15, 8, 15, '#E6A132');
createDeparture(newYorkWrapper, 'newYork', 86, 57, '#F5C59D');
createArrival(newYorkWrapper, 'newYork', 97, 57, '#cfd673');
createMood(newYorkWrapper, 'newYork', 86, 68, '#f5e6b5');
createDuration(newYorkDuration, 'newYork', 86, 8, 145);
createText(newYorkWrapper, 15, 86, 100, 'Jul 18 - present:');
createText(newYorkWrapper, 15, 86, 115, 'Back in New York');
createHideCity(newYorkWrapper, 15, 148, 75, 85, 6);

const seattleWrapper = vacaPoints.append('g')
  .attr('class', 'seattleWrapper')
  .attr('transform', 'translate(788, 60)');

const seattlePurpose = seattleWrapper.append('g')
  .attr('class', 'seattlePurpose')
  .attr('transform', 'translate(65, 38)');

createVacaPurpose(seattlePurpose, 14, 15, 5, 15, 8, 15, '#E6A132');
createDeparture(seattleWrapper, 'seattle', 71, 30, '#cfd673');
createArrival(seattleWrapper, 'seattle', 82, 30, '#DDDDDD');
createMood(seattleWrapper, 'seattle', 71, 21, '#f5e6b5');
createDuration(seattleWrapper, 'seattle', 71, 89, 18, '#70A9A6');
createText(seattleWrapper, 17, 70, -29, 'Oct 21 - 28:');
createText(seattleWrapper, 17, 70, -12, 'Visited Richmond for');
createText(seattleWrapper, 17, 70, 3, 'the best xiao long bao');
createHideCity(seattleWrapper, 17, 76, 75, 70, 18);

const timelineRectsWrapper = timelineWrapper.append('g')
  .attr('class', 'timelineRectsWrapper');

// function that generates path data
const linefunc = d3.line()
  .x(d => d.x)
  .y(d => d.y);

const timelineRectGroups = timelineRectsWrapper.selectAll('.timeline-rect-groups')
  .data(timelineData)
  .enter()
  .append('g')
  .attr('class', (d, i) => `timeline-rect-${i}`);

d3.select('.timeline-rect-0').style('filter', 'url(#glow)');
d3.select('.timeline-rect-1').attr('stroke', '#FFFFFE').attr('stroke-width', 0.6);
d3.select('.timeline-rect-2').attr('stroke', '#FFFFFE').attr('stroke-width', 0.6);
d3.select('.timeline-rect-3').attr('stroke', '#FFFFFE').attr('stroke-width', 0.6);
d3.select('.timeline-rect-4').style('filter', 'url(#glow)');
d3.select('.timeline-rect-5').style('filter', 'url(#glow)');
d3.select('.timeline-rect-6').style('filter', 'url(#glow)');
d3.select('.timeline-rect-7').attr('stroke', '#FFFFFE').attr('stroke-width', 0.6);
d3.select('.timeline-rect-8').attr('stroke', '#FFFFFE').attr('stroke-width', 0.6);
d3.select('.timeline-rect-9').attr('stroke', '#FFFFFE').attr('stroke-width', 0.6);
d3.select('.timeline-rect-10').attr('stroke', '#FFFFFE').attr('stroke-width', 0.6);
d3.select('.timeline-rect-11').attr('stroke', '#FFFFFE').attr('stroke-width', 0.6);
d3.select('.timeline-rect-12').attr('stroke', '#FFFFFE').attr('stroke-width', 0.6);
d3.select('.timeline-rect-13').attr('stroke', '#FFFFFE').attr('stroke-width', 0.6);
d3.select('.timeline-rect-14').attr('stroke', '#FFFFFE').attr('stroke-width', 0.6);
d3.select('.timeline-rect-15').attr('stroke', '#FFFFFE').attr('stroke-width', 0.6);
d3.select('.timeline-rect-16').style('filter', 'url(#glow)');
d3.select('.timeline-rect-17').attr('stroke', '#FFFFFE').attr('stroke-width', 0.6);
d3.select('.timeline-rect-18').style('filter', 'url(#glow)');

const start = timelineWrapper.append('g')
  .attr('class', 'start')
  .attr('transform', 'translate(-60, 488)');

const startText = start.append('text')
  .text('⇨')
  .attr('text-anchor', 'center')
  .attr('font-size', '22px')
  .attr('fill', '#232B3F')
  .attr('x', 2);

move();

const timelineRects = timelineRectGroups.append('rect')
  .attr('class', 'timeline-rects')
  .attr('x', d => xScale(d.text))
  .attr('y', 440)
  .attr('width', rectAreaWidth / timelineData.length - 10)
  .attr('height', rectangleHeight);

const timelinePaths = timelineRectGroups.append('path')
  .attr('class', (d, i) => `path-${i}`)
  .attr('d', (d, i) => linefunc(pathData[i]))
  .attr('stroke', 'transparent')
  .attr('stroke-width', 1.2)
  .attr('fill', 'none');

const moreTimelinePaths = timelineRectGroups.append('path')
  .attr('class', (d, i) => `path-${i}`)
  .attr('d', (d, i) => linefunc(morePathData[i]))
  .attr('stroke', 'transparent')
  .attr('stroke-width', 1.2)
  .attr('fill', 'none');

timelineRectGroups.on('mouseover', (d, i) => drawCityAnimation(d, i));
timelineRectGroups.on('mouseleave', (d, i) => eraseCityAnimation(d, i));

const timelineAxis = timelineWrapper.append('g')
  .attr('class', 'timelineAxis')
  .attr('transform', 'translate(-3, 446)')
  .attr('text-anchor', 'middle')
  .style('stroke', 'transparent')
  .call(xAxis)
  .selectAll('.tick text')
  .call(wrap, xScale.bandwidth());
