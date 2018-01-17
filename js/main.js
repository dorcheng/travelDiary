/* ------------ SVG Container ----------------*/
// Create SVG Viewport
const svgContainer = d3.select('body').append('svg')
  .attr('width', 1400)
  .attr('height', 1000);

/* ------------ Defs ----------------*/
// Append defs (definitions) element
const defs = svgContainer.append('defs');

// Initialize the blur filter
defs.append('filter')
  .attr('id', 'horizontal-blur-filter')
  .attr('width', '300%')
  .attr('x', '-100%')
  .attr('color-interpolation-filters', 'sRGB')
  .append('feGaussianBlur')
  .attr('in', 'SourceGraphic')
  .attr('stdDeviation', '4 0');

// Add glow filter
const glowFilter = defs.append('filter')
  .attr('id', 'glow')
  .append('feGaussianBlur')
  .attr('class', 'blur')
  .attr('stdDeviation', '3')
  .attr('result', 'coloredBlur');

const feMerge = glowFilter.append('feMerge');

feMerge.append('feMergeNode')
  .attr('in', 'coloredBlur');
feMerge.append('feMergeNode')
  .attr('in', 'SourceGraphic');

// Add drop shadow
const dropshadow = defs.append('filter')
  .attr('id', 'drop-shadow')
  .attr('filterUnits', 'userSpaceOnUse')
  .attr('width', '130%')
  .attr('height', '130%');
dropshadow.append('feGaussianBlur')
  .attr('in', 'SourceGraphic')
  .attr('stdDeviation', 2)
  .attr('result', 'blur-out');
dropshadow.append('feColorMatrix')
  .attr('in', 'blur-out')
  .attr('type', 'matrix')
  .attr('values', 180)
  .attr('result', 'color-out');

const feOffset = dropshadow.append('feOffset')
  .attr('in', 'color-out')
  .attr('dx', 2)
  .attr('dy', 2)
  .attr('result', 'the-shadow');
dropshadow.append('feBlend')
  .attr('in', 'SourceGraphic')
  .attr('in2', 'the-shadow')
  .attr('mode', 'normal');

const linearGradient = defs.append('linearGradient')
  .attr('id', 'linear-gradient');
// timeline gradient
linearGradient
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '0%')
  .attr('gradientUnits', 'userSpaceOnUse');

// Append multiple color stops by using D3's data/enter step
linearGradient.selectAll('stop')
  .data([{
      offset: '0%',
      color: '#FB8370'
    },
    {
      offset: '12.5%',
      color: '#FB8370'
    },
    {
      offset: '30%',
      color: '#FFD0B8'
    },
    {
      offset: '50%',
      color: '#7AD3C5'
    },
    {
      offset: '74%',
      color: '#627C85'
    },
    {
      offset: '77%',
      color: '#627C85'
    },
    {
      offset: '87.5%',
      color: '#627C85'
    },
    {
      offset: '100%',
      color: '#627C85'
    }
  ])
  .enter().append('stop')
  .attr('offset', function (d) {
    return d.offset;
  })
  .attr('stop-color', function (d) {
    return d.color;
  });

// chicagoGradient
const chicagoGradient = defs.append('linearGradient')
  .attr('id', 'chicagoGradient');
chicagoGradient
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '0%');
// Set the color for the start (0%)
chicagoGradient.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#FFD0B8');
// Set the color for the end (100%)
chicagoGradient.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#7AD3C5');

// newYorkGradient
const newYorkGradient = defs.append('linearGradient')
  .attr('id', 'newYorkGradient');
newYorkGradient
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '100%')
  .attr('y2', '0%');
// Set the color for the start (0%)
newYorkGradient.append('stop')
  .attr('offset', '0%')
  .attr('stop-color', '#7CD0C3');
// Set the color for the end (100%)
newYorkGradient.append('stop')
  .attr('offset', '100%')
  .attr('stop-color', '#6B999A');
/* ------------ End Defs ----------------*/
