/* ------------ Start Functions ----------------*/
const createMood = (wrapper, destination, x, y, color) => {
  wrapper.append('rect')
    .attr('class', destination + 'Mood')
    .attr('x', x)
    .attr('y', y)
    .attr('fill', color)
    .attr('stroke', 'none')
    .attr('width', 75)
    .attr('height', 8);
};

const createDeparture = (wrapper, destination, x, y, color) => {
  wrapper.append('rect')
    .attr('class', destination + 'Departure')
    .attr('x', x)
    .attr('y', y)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', color)
    .attr('stroke', 'none');
};

const createArrival = (wrapper, destination, x, y, color) => {
  wrapper.append('rect')
    .attr('class', destination + 'Arrival')
    .attr('x', x)
    .attr('y', y)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', color)
    .attr('stroke', 'none');
};

const createCareerPurpose = (wrapper, x1, y1, x2, y2) => {
  wrapper.append('line')
    .attr('class', 'leftLadder')
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2)
    .attr('stroke-width', 2)
    .attr('stroke', '#7C7BA0');
  wrapper.append('line')
    .attr('class', 'rightLadder')
    .attr('x1', x1 + 10)
    .attr('y1', y1)
    .attr('x2', x2 + 10)
    .attr('y2', y2)
    .attr('stroke-width', 2)
    .attr('stroke', '#7C7BA0');
  wrapper.append('line')
    .attr('class', 'stepsLadder')
    .attr('x1', x1)
    .attr('y1', y1 + 4)
    .attr('x2', x2 + 10)
    .attr('y2', y2 - 13)
    .attr('stroke-width', 2)
    .attr('stroke', '#7C7BA0');
  wrapper.append('line')
    .attr('class', 'stepsLadder')
    .attr('x1', x1)
    .attr('y1', y1 + 9)
    .attr('x2', x2 + 10)
    .attr('y2', y2 - 8)
    .attr('stroke-width', 2)
    .attr('stroke', '#7C7BA0');
  wrapper.append('line')
    .attr('class', 'stepsLadder')
    .attr('x1', x1)
    .attr('y1', y1 + 14)
    .attr('x2', x2 + 10)
    .attr('y2', y2 - 3)
    .attr('stroke-width', 2)
    .attr('stroke', '#7C7BA0');
};

const createVacaPurpose = (wrapper, cx, cy, x1, y1, x2, y2, strokeColor) => {
  wrapper.append('circle')
    .attr('class', 'vacaSun')
    .attr('cx', cx)
    .attr('cy', cy)
    .attr('r', 4)
    .style('fill', 'transparent')
    .attr('stroke-width', 2)
    .attr('stroke', strokeColor);
  wrapper.append('line')
    .attr('class', 'vacaRay')
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2)
    .attr('stroke-width', 2)
    .attr('stroke', strokeColor);
  wrapper.append('line')
    .attr('class', 'vacaRay')
    .attr('x1', x1 + 15)
    .attr('y1', y1)
    .attr('x2', x2 + 15)
    .attr('y2', y2)
    .attr('stroke-width', 2)
    .attr('stroke', strokeColor);
  wrapper.append('line')
    .attr('class', 'vacaRay')
    .attr('x1', x1 + 9)
    .attr('y1', y1 + 9)
    .attr('x2', x2 + 6)
    .attr('y2', y2 + 6)
    .attr('stroke-width', 2)
    .attr('stroke', strokeColor);
  wrapper.append('line')
    .attr('class', 'vacaRay')
    .attr('x1', x1 + 9)
    .attr('y1', y1 - 6)
    .attr('x2', x2 + 6)
    .attr('y2', y2 - 9)
    .attr('stroke-width', 2)
    .attr('stroke', strokeColor);
  wrapper.append('line')
    .attr('class', 'vacaRay')
    .attr('x1', x1 + 1)
    .attr('y1', y1 - 8)
    .attr('x2', x2 + 1)
    .attr('y2', y2 - 5)
    .attr('stroke-width', 2)
    .attr('stroke', strokeColor);
  wrapper.append('line')
    .attr('class', 'vacaRay')
    .attr('x1', x1 + 17)
    .attr('y1', y1 + 8)
    .attr('x2', x2 + 11)
    .attr('y2', y2 + 5)
    .attr('stroke-width', 2)
    .attr('stroke', strokeColor);
  wrapper.append('line')
    .attr('class', 'vacaRay')
    .attr('x1', x1 + 14)
    .attr('y1', y1 - 5)
    .attr('x2', x2 + 14)
    .attr('y2', y2 - 8)
    .attr('stroke-width', 2)
    .attr('stroke', strokeColor);
  wrapper.append('line')
    .attr('class', 'vacaRay')
    .attr('x1', x1 + 2)
    .attr('y1', y1 + 8)
    .attr('x2', x2 + 2)
    .attr('y2', y2 + 5)
    .attr('stroke-width', 2)
    .attr('stroke', strokeColor);
};

const createMom = (wrapper, cx, cy, x1, y1, x2, y2) => {
  wrapper.append('circle')
    .attr('class', 'momTop')
    .attr('cx', cx)
    .attr('cy', cy)
    .attr('r', 4)
    .style('fill', 'transparent')
    .attr('stroke-width', 2)
    .attr('stroke', '#EFC4D1');
  wrapper.append('line')
    .attr('class', 'momBottom')
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2)
    .attr('stroke-width', 2)
    .attr('stroke', '#EFC4D1');
  wrapper.append('line')
    .attr('class', 'momBottom')
    .attr('x1', x1 - 4)
    .attr('y1', y1 + 5)
    .attr('x2', x2 + 4)
    .attr('y2', y2 - 3)
    .attr('stroke-width', 2)
    .attr('stroke', '#EFC4D1');
};

const createDad = (wrapper, cx, cy, x1, y1, x2, y2) => {
  wrapper.append('circle')
    .attr('class', 'dadTop')
    .attr('cx', cx)
    .attr('cy', cy)
    .attr('r', 4)
    .style('fill', 'transparent')
    .attr('stroke-width', 2)
    .attr('stroke', '#36BCBB');
  wrapper.append('line')
    .attr('class', 'dadBottom')
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2)
    .attr('stroke-width', 2)
    .attr('stroke', '#36BCBB');
  wrapper.append('line')
    .attr('class', 'dadBottom')
    .attr('x1', x1 - 4)
    .attr('y1', y1 + 4)
    .attr('x2', x2)
    .attr('y2', y2 - 1)
    .attr('stroke-width', 2)
    .attr('stroke', '#36BCBB');
  wrapper.append('line')
    .attr('class', 'dadBottom')
    .attr('x1', x1 + 4)
    .attr('y1', y1 + 4)
    .attr('x2', x2)
    .attr('y2', y2 - 1)
    .attr('stroke-width', 2)
    .attr('stroke', '#36BCBB');
};

const createSO = (wrapper, cx, cy, x, y) => {
  wrapper.append('circle')
    .attr('class', 'soLeft')
    .attr('cx', cx)
    .attr('cy', cy)
    .attr('r', 3)
    .style('fill', '#FA756A')
    .attr('stroke-width', 1)
    .attr('stroke', '#FA756A');
  wrapper.append('circle')
    .attr('class', 'soRight')
    .attr('cx', cx + 6)
    .attr('cy', cy)
    .attr('r', 3)
    .style('fill', '#FA756A')
    .attr('stroke-width', 1)
    .attr('stroke', '#FA756A');
  wrapper.append('rect')
    .attr('class', 'soBottom')
    .attr('transform', 'rotate(45, 104, 8)')
    .attr('x', x)
    .attr('y', y)
    .attr('width', 6)
    .attr('height', 6)
    .style('fill', '#FA756A')
    .attr('stroke-width', 1.5)
    .attr('stroke', '#FA756A');
};

const createFriends = (buddy, cx, cy, x1, y1, x2, y2, strokeColor) => {
  buddy.append('circle')
    .attr('class', 'friendLeft')
    .attr('cx', cx)
    .attr('cy', cy)
    .attr('r', 3)
    .style('fill', 'transparent')
    .attr('stroke-width', 1.6)
    .attr('stroke', strokeColor);
  buddy.append('circle')
    .attr('class', 'friendTop')
    .attr('cx', cx + 12)
    .attr('cy', cy - 5)
    .attr('r', 3)
    .style('fill', 'transparent')
    .attr('stroke-width', 1.6)
    .attr('stroke', strokeColor);
  buddy.append('circle')
    .attr('class', 'friendBottom')
    .attr('cx', cx + 12)
    .attr('cy', cy + 5)
    .attr('r', 3)
    .style('fill', 'transparent')
    .attr('stroke-width', 1.6)
    .attr('stroke', strokeColor);
  buddy.append('line')
    .attr('class', 'friendTopPath')
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2)
    .attr('stroke-width', 2)
    .attr('stroke', strokeColor);
  buddy.append('line')
    .attr('class', 'friendBottomPath')
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2 + 8)
    .attr('stroke-width', 2)
    .attr('stroke', strokeColor);
};

const createDuration = (wrapper, destination, x, y, width, color) => {
  wrapper.append('rect')
    .attr('class', destination + 'Duration')
    .attr('x', x)
    .attr('y', y)
    .attr('height', 4)
    .attr('width', width)
    .attr('fill', color)
    .attr('stroke', 'transparent');
};

const createText = (wrapper, number, x, y, text) => {
  wrapper.append('text')
    .attr('class', `text${number}`)
    .attr('text-anchor', 'start')
    .attr('font-size', '10.5px')
    .attr('fill', 'transparent')
    .attr('letter-spacing', 0.20)
    .attr('x', x)
    .attr('y', y)
    .text(text);
};

const createHideCity = (wrapper, num, width, height, x, y) => {
  wrapper.append('rect')
    .attr('class', `city${num}`)
    .attr('fill', '#EEEEEE')
    .attr('width', width)
    .attr('height', height)
    .attr('x', x)
    .attr('y', y);
};

// wrap function from https://bl.ocks.org/mbostock/7555321
const wrap = (text, width) => {
  text.each(function () {
    var text = d3.select(this),
      words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 4.8, // ems
      y = text.attr('y'),
      dy = parseFloat(text.attr('dy')),
      tspan = text.text(null).append('tspan').attr('x', 0).attr('y',
        y).attr('dy', dy + 'em');
    while (words.length) {
      word = words.pop();
      line.push(word);
      tspan.text(line.join(' '));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(' '));
        line = [word];
        tspan = text.append('tspan').attr('x', 0).attr('y', y).attr(
          'dy', ++lineNumber * lineHeight + dy +
          'em').text(word);
      }
    }
  });
};

const drawCityAnimation = (d, i) => {
  const path = d3.selectAll(`.path-${i}`);
  const totalLength = path.node().getTotalLength();
  path
    .attr('stroke-dasharray', totalLength + ' ' + totalLength)
    .attr('stroke-dashoffset', totalLength)
    .transition().duration(600).ease(d3.easeLinear)
    .attr('stroke', pathColors[i].color)
    .attr('stroke-dashoffset', 0);
  d3.selectAll(`.text${i}`)
    .transition()
    .duration(600)
    .ease(d3.easeSin)
    .attr('fill', '#232B3F');
  d3.selectAll(`.city${i}`)
    .transition()
    .duration(600)
    .ease(d3.easeSin)
    .attr('fill', 'transparent');
  startText
    .transition()
    .duration(400)
    .ease(d3.easeLinear)
    .attr('fill', 'transparent');
};

const eraseCityAnimation = (d, i) => {
  d3.selectAll(`.path-${i}`)
    .transition()
    .duration(600)
    .attr('stroke', 'transparent');
  d3.selectAll(`.text${i}`)
    .transition()
    .duration(600)
    .attr('fill', 'transparent');
  d3.selectAll(`.city${i}`)
    .transition()
    .duration(600)
    .attr('fill', '#EEEEEE');
};

const move = () => {
  pos = pos === xMin ? xMax : xMin;
  startText.transition()
    .duration(825)
    .ease(d3.easeLinear)
    .attr('x', pos)
    .on('end', move);
};
/* ------------ End Functions ----------------*/
