class TrafficData {
    constructor(sourceUpdated, results) {
      this.sourceUpdated = sourceUpdated || null;
      this.results = results || [];
    }
  }
  
  module.exports = TrafficData;

/*function parseTrafficData(data) {
    return {
      sourceUpdated: data.sourceUpdated || null,
      results: data.results ? data.results.map(result => ({
        location: result.location ? {
          description: result.location.description || null,
          length: result.location.length || null,
          olr: result.location.olr || null,
          tmc: result.location.tmc ? {
            extendedCountryCode: result.location.tmc.extendedCountryCode || null,
            ebuCountryCode: result.location.tmc.ebuCountryCode || null,
            tableId: result.location.tmc.tableId || null,
            locationId: result.location.tmc.locationId || null,
            queuingDirection: result.location.tmc.queuingDirection || null,
            extent: result.location.tmc.extent || null,
            primaryOffset: result.location.tmc.primaryOffset || null,
            affectedLength: result.location.tmc.affectedLength || null,
          } : {},
          shape: result.location.shape ? {
            links: result.location.shape.links.map(link => ({
              points: link.points.map(point => ({
                lat: point.lat || null,
                lng: point.lng || null,
              })),
              length: link.length || null,
            }))
          } : {},
        } : {},
        currentFlow: result.currentFlow ? {
          speed: result.currentFlow.speed || null,
          speedUncapped: result.currentFlow.speedUncapped || null,
          freeFlow: result.currentFlow.freeFlow || null,
          jamFactor: result.currentFlow.jamFactor || null,
          jamTendency: result.currentFlow.jamTendency || null,
          confidence: result.currentFlow.confidence || null,
          traversability: result.currentFlow.traversability || null,
          junctionTraversability: result.currentFlow.junctionTraversability || null,
          subSegments: result.currentFlow.subSegments ? result.currentFlow.subSegments.map(subSegment => ({
            length: subSegment.length || null,
            speed: subSegment.speed || null,
            speedUncapped: subSegment.speedUncapped || null,
            freeFlow: subSegment.freeFlow || null,
            jamFactor: subSegment.jamFactor || null,
            jamTendency: subSegment.jamTendency || null,
            confidence: subSegment.confidence || null,
            traversability: subSegment.traversability || null,
            junctionTraversability: subSegment.junctionTraversability || null,
            lanes: subSegment.lanes ? subSegment.lanes.map(lane => ({
              laneNumbers: lane.laneNumbers || [],
              laneType: lane.laneType || null,
              speedUncapped: lane.speedUncapped || null,
              jamFactor: lane.jamFactor || null,
            })) : [],
          })) : [],
          lanes: result.currentFlow.lanes ? result.currentFlow.lanes.map(lane => ({
            laneNumbers: lane.laneNumbers || [],
            laneType: lane.laneType || null,
            speedUncapped: lane.speedUncapped || null,
            jamFactor: lane.jamFactor || null,
          })) : [],
        } : {},
      })) : []
    };
  }
  
  module.exports = { parseTrafficData };*/