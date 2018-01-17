/* ------------ Start Legend ----------------*/
const legendWrapper = svgContainer.append('g')
  .attr('class', 'legendWrapper')
  .attr('transform', 'translate(830,90)');

const legendTitle = legendWrapper.append('text')
  .attr('class', 'legendTitle')
  .attr('font-size', '16px')
  .attr('font-weight', 700)
  .attr('text-anchor', 'start')
  .attr('letter-spacing', 2)
  .attr('fill', '#232B3F')
  .text('DECODER');

const moodWrapper = legendWrapper.append('g')
  .attr('class', 'moodWrapper')
  .attr('transform', 'translate(0, 30)');

const moodScale = d3.scaleBand()
  .domain(moodData.map(node => node.mood))
  .rangeRound([0, 275])
  .padding(0.1);

const moodXAxis = d3.axisBottom()
  .scale(moodScale)
  .tickSize(0);

const moodTitle = moodWrapper.append('text')
  .attr('class', 'moodTitle')
  .attr('fill', '#232B3F')
  .attr('font-size', '10px')
  .attr('text-anchor', 'start')
  .text('Mood');

const moodBars = moodWrapper.append('g')
  .attr('class', 'moodBars');

const moodRects = moodBars.selectAll('.mood-rects')
  .data(moodData)
  .enter()
  .append('rect')
  .attr('class', 'mood-rects')
  .attr('x', d => moodScale(d.mood) + 65)
  .attr('y', -7)
  .attr('fill', d => d.color)
  .attr('width', 75)
  .attr('height', 8);

const moodAxis = moodWrapper.append('g')
  .attr('class', 'moodAxis')
  .attr('text-anchor', 'middle')
  .call(moodXAxis);

const departureWrapper = legendWrapper.append('g')
  .attr('class', 'departureWrapper')
  .attr('transform', 'translate(0, 50)');

const departureTitle = departureWrapper.append('text')
  .attr('class', 'departureTitle')
  .attr('fill', '#232B3F')
  .attr('font-size', '10px')
  .attr('text-anchor', 'start')
  .text('Departures');

const departureRectsWrapper = departureWrapper.append('g')
  .attr('class', 'departureRectsWrapper')
  .attr('transform', 'translate(0, 8)');

const departureYScale = d3.scaleBand()
  .domain(departureData.map(d => d.city))
  .range([0, 92])
  .padding(0.1);

const departureYAxis = d3.axisRight(departureYScale)
  .tickSize(0);

const departureAxis = departureWrapper.append('g')
  .attr('class', 'departureAxis')
  .attr('transform', 'translate(20, 4)')
  .call(departureYAxis);

const departureRects = departureRectsWrapper.selectAll('.departure-rects')
  .data(departureData)
  .enter()
  .append('rect')
  .attr('class', 'departure-rects')
  .attr('width', 10)
  .attr('height', 10)
  .attr('y', d => departureYScale(d.city) + 3)
  .attr('fill', d => d.color);

const arrivalWrapper = legendWrapper.append('g')
  .attr('class', 'arrivalWrapper')
  .attr('transform', 'translate(120, 50)');

const arrivalTitle = arrivalWrapper.append('text')
  .attr('class', 'arrivalTitle')
  .attr('fill', '#232B3F')
  .attr('font-size', '10px')
  .attr('text-anchor', 'start')
  .text('Arrivals');

const arrivalRectsWrapper = arrivalWrapper.append('g')
  .attr('class', 'arrivalRectsWrapper')
  .attr('transform', 'translate(0, 12)');

const arrivalYScale1 = d3.scaleBand()
  .domain(arrivalData.slice(0, 5).map(d => d.city))
  .range([0, 110])
  .padding(0.1);

const arrivalYAxis1 = d3.axisRight(arrivalYScale1)
  .tickSize(0);

const arrivalAxis1 = arrivalWrapper.append('g')
  .attr('class', 'arrivalAxis-1')
  .attr('transform', 'translate(20, 8)')
  .call(arrivalYAxis1);

const arrivalRects1 = arrivalRectsWrapper.selectAll('.arrival-rects-1')
  .data(arrivalData.slice(0, 5))
  .enter()
  .append('rect')
  .attr('class', 'arrival-rects-1')
  .attr('width', 10)
  .attr('height', 10)
  .attr('y', d => arrivalYScale1(d.city))
  .attr('fill', d => d.color);

const arrivalYScale2 = d3.scaleBand()
  .domain(arrivalData.slice(5, 10).map(d => d.city))
  .range([0, 110])
  .padding(0.1);

const arrivalYAxis2 = d3.axisRight(arrivalYScale2)
  .tickSize(0);

const arrivalAxis2 = arrivalWrapper.append('g')
  .attr('class', 'arrivalAxis-2')
  .attr('transform', 'translate(140, 8)')
  .call(arrivalYAxis2);

const arrivalRects2 = arrivalRectsWrapper.selectAll('.arrival-rects-2')
  .data(arrivalData.slice(5, 10))
  .enter()
  .append('rect')
  .attr('class', 'arrival-rects-2')
  .attr('width', 10)
  .attr('height', 10)
  .attr('x', 120)
  .attr('y', d => arrivalYScale2(d.city))
  .attr('fill', d => d.color);

const arrivalYScale3 = d3.scaleBand()
  .domain(arrivalData.slice(10, 15).map(d => d.city))
  .range([0, 110])
  .padding(0.1);

const arrivalYAxis3 = d3.axisRight(arrivalYScale3)
  .tickSize(0);

const arrivalAxis3 = arrivalWrapper.append('g')
  .attr('class', 'arrivalAxis-3')
  .attr('transform', 'translate(260, 8)')
  .call(arrivalYAxis3);

const arrivalRects3 = arrivalRectsWrapper.selectAll('.arrival-rects-3')
  .data(arrivalData.slice(10, 15))
  .enter()
  .append('rect')
  .attr('class', 'arrival-rects-3')
  .attr('width', 10)
  .attr('height', 10)
  .attr('x', 240)
  .attr('y', d => arrivalYScale3(d.city))
  .attr('fill', d => d.color);

const buddyWrapper = legendWrapper.append('g')
  .attr('class', 'buddyWrapper')
  .attr('transform', 'translate(120, 184)');

const buddyTitle = buddyWrapper.append('text')
  .attr('class', 'buddyTitle')
  .attr('fill', '#232B3F')
  .attr('font-size', '10px')
  .text('Travel Buddies');

const travelBuddyWrapper = buddyWrapper.append('g')
  .attr('class', 'travelBuddyWrapper')
  .attr('transform', 'translate(95, -10)');

const momWrapper = travelBuddyWrapper.append('g')
  .attr('class', 'momWrapper');

createMom(momWrapper, 6, 6, 6, 10, 6, 18);

const dadWrapper = travelBuddyWrapper.append('g')
  .attr('class', 'dadWrapper')
  .attr('transform', 'translate(2, 0)');

createDad(dadWrapper, 50, 6, 50, 10, 50, 18);

const soWrapper = travelBuddyWrapper.append('g')
  .attr('class', 'soWrapper')
  .attr('transform', 'translate(0, 2)');

createSO(soWrapper, 98, 6, 100, 8);

const friendWrapper = travelBuddyWrapper.append('g')
  .attr('class', 'friendWrapper')
  .attr('transform', 'translate(0, 1)');

createFriends(friendWrapper, 144, 8, 147, 8, 154, 4, '#cfd673');

const purposeWrapper = legendWrapper.append('g')
  .attr('class', 'purposeWrapper')
  .attr('transform', 'translate(0, 160)');

const purposeTitle = purposeWrapper.append('text')
  .attr('class', 'purposeTitle')
  .attr('fill', '#232B3F')
  .attr('font-size', '10px')
  .text('Purpose');

const careerWrapper = purposeWrapper.append('g')
  .attr('class', 'careerWrapper')
  .attr('transform', 'translate(3, 7)');

createCareerPurpose(careerWrapper, 0, 6, 0, 23);

const vacaWrapper = purposeWrapper.append('g')
  .attr('class', 'vacaWrapper')
  .attr('transform', 'translate(44, 7)');

createVacaPurpose(vacaWrapper, 14, 15, 5, 15, 8, 15, '#E6A132');
/* ------------ End Legend ----------------*/
