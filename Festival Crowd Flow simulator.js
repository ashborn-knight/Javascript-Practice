const morningGates = [
  { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
  { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
  { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
  { id: "West", capacity: 2, queue: [4, 1, 2, 3] },
];

const nightGates = [
  { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
  { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
  { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
  { id: "West", capacity: 3, queue: [5, 2, 1, 4] },
];

// Step 4: Initialize throughput summary
function initializeThroughput(gates) {
  const summary = {};
  for (const gate of gates) {
    summary[gate.id] = 0;
  }
  return summary;
}

// Step 5 + Step 6: Process each gate at a given tick
function processGate(gate, tickIndex) {
  // Step 5: Get the number of attendees arriving at this tick
  const currentTickQueue = gate.queue[tickIndex];

  // Step 6: Calculate throughput (limited by gate capacity)
  const throughput = Math.min(currentTickQueue, gate.capacity);

  return throughput;
}

// Step 7: Run simulation for all ticks
function runSimulation(gates) {
  const summary = initializeThroughput(gates);

  // Assume all queues have the same length
  const ticks = gates[0].queue.length;

  for (let tickIndex = 0; tickIndex < ticks; tickIndex++) {
    for (const gate of gates) {
      const throughput = processGate(gate, tickIndex);
      summary[gate.id] += throughput;
    }
  }

  return summary;
}

// Example runs
console.log("Morning Summary:", runSimulation(morningGates));
console.log("Night Summary:", runSimulation(nightGates));
