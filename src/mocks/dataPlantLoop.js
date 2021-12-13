export const dataPlantLoop = [
  {
      "group": "nodes",
      "data": {
          "id": 1114,
          "label": "TRANSFER Pump",
          "class": "Pump:VariableSpeed",
          "nodes": {
              "inlet": [
                  "TRANSFER Supply Inlet Node",
                  "to_1114"
              ],
              "outlet": [
                  "TRANSFER Supply Pump-Heating Node",
                  "from_1114"
              ]
          },
          "connecting_node": "TRANSFER Supply Pump-Heating Node",
          "loop": [
              "TRANSFER Loop:supply"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1111,
          "label": "TRANSFER Supply Splitter",
          "class": "Connector:Splitter",
          "nodes": {
              "inlet_node": {
                  "name": "inlet_node",
                  "type": "inlet"
              },
              "outlet_node1": {
                  "name": "outlet_node1",
                  "type": "outlet"
              }
          },
          "loop": [
              "TRANSFER Loop:supply"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1116,
          "label": "SOURCE to TRANSFER HX",
          "class": "HeatExchanger:FluidToFluid",
          "nodes": {
              "inlet": [
                  "SOURCE Demand HX Inlet Node",
                  "TRANSFER Supply Heating Inlet Node",
                  "to_1116"
              ],
              "outlet": [
                  "TRANSFER Supply Outlet Node",
                  "SOURCE Demand HX Outlet Node",
                  "TRANSFER Supply Heating Outlet Node",
                  "from_1116"
              ]
          },
          "connecting_node": "TRANSFER Supply Heating Outlet Node",
          "loop": [
              "TRANSFER Loop:supply",
              "SOURCE Loop:demand"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1112,
          "label": "TRANSFER Supply Mixer",
          "class": "Connector:Mixer",
          "nodes": {
              "outlet_node": {
                  "name": "outlet_node",
                  "type": "outlet"
              },
              "inlet_node1": {
                  "name": "inlet_node1",
                  "type": "inlet"
              }
          },
          "loop": [
              "TRANSFER Loop:supply"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1118,
          "label": "TRANSFER Supply Outlet Pipe",
          "class": "Pipe:Adiabatic",
          "nodes": {
              "inlet": [
                  "TRANSFER Supply Heating-Pipe Node",
                  "to_1118"
              ],
              "outlet": [
                  "TRANSFER Supply Outlet Node",
                  "from_1118"
              ]
          },
          "connecting_node": "TRANSFER Supply Outlet Node",
          "loop": [
              "TRANSFER Loop:supply"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1124,
          "label": "TRANSFER Demand Inlet Pipe",
          "class": "Pipe:Adiabatic",
          "nodes": {
              "inlet": [
                  "TRANSFER Demand Inlet Node",
                  "to_1124"
              ],
              "outlet": [
                  "TRANSFER Demand Pipe-Load Profile Node",
                  "from_1124"
              ]
          },
          "connecting_node": "TRANSFER Demand Pipe-Load Profile Node",
          "loop": [
              "TRANSFER Loop:demand"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1121,
          "label": "TRANSFER Demand Splitter",
          "class": "Connector:Splitter",
          "nodes": {
              "inlet_node": {
                  "name": "inlet_node",
                  "type": "inlet"
              },
              "outlet_node1": {
                  "name": "outlet_node1",
                  "type": "outlet"
              }
          },
          "loop": [
              "TRANSFER Loop:demand"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1090,
          "label": "TRANSFER to USE HX",
          "class": "HeatExchanger:FluidToFluid",
          "nodes": {
              "inlet": [
                  "TRANSFER Demand HX Inlet Node",
                  "USE Supply Heating Inlet Node",
                  "to_1090"
              ],
              "outlet": [
                  "Use Supply Outlet Node",
                  "TRANSFER Demand HX Outlet Node",
                  "USE Supply Heating Outlet Node",
                  "from_1090"
              ]
          },
          "connecting_node": "TRANSFER Demand HX Outlet Node",
          "loop": [
              "TRANSFER Loop:demand"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1122,
          "label": "TRANSFER Demand Mixer",
          "class": "Connector:Mixer",
          "nodes": {
              "outlet_node": {
                  "name": "outlet_node",
                  "type": "outlet"
              },
              "inlet_node1": {
                  "name": "inlet_node1",
                  "type": "inlet"
              }
          },
          "loop": [
              "TRANSFER Loop:demand"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1127,
          "label": "TRANSFER Demand Outlet Pipe",
          "class": "Pipe:Adiabatic",
          "nodes": {
              "inlet": [
                  "TRANSFER Demand Load Profile-Pipe Node",
                  "to_1127"
              ],
              "outlet": [
                  "TRANSFER Demand Outlet Node",
                  "from_1127"
              ]
          },
          "connecting_node": "TRANSFER Demand Outlet Node",
          "loop": [
              "TRANSFER Loop:demand"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1149,
          "label": "SOURCE Demand Inlet Pipe",
          "class": "Pipe:Adiabatic",
          "nodes": {
              "inlet": [
                  "SOURCE Demand Inlet Node",
                  "to_1149"
              ],
              "outlet": [
                  "SOURCE Demand Pipe-Load Profile Node",
                  "from_1149"
              ]
          },
          "connecting_node": "SOURCE Demand Pipe-Load Profile Node",
          "loop": [
              "SOURCE Loop:demand"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1146,
          "label": "SOURCE Demand Splitter",
          "class": "Connector:Splitter",
          "nodes": {
              "inlet_node": {
                  "name": "inlet_node",
                  "type": "inlet"
              },
              "outlet_node1": {
                  "name": "outlet_node1",
                  "type": "outlet"
              }
          },
          "loop": [
              "SOURCE Loop:demand"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1147,
          "label": "SOURCE Demand Mixer",
          "class": "Connector:Mixer",
          "nodes": {
              "outlet_node": {
                  "name": "outlet_node",
                  "type": "outlet"
              },
              "inlet_node1": {
                  "name": "inlet_node1",
                  "type": "inlet"
              }
          },
          "loop": [
              "SOURCE Loop:demand"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1152,
          "label": "SOURCE Demand Outlet Pipe",
          "class": "Pipe:Adiabatic",
          "nodes": {
              "inlet": [
                  "SOURCE Demand Load Profile-Pipe Node",
                  "to_1152"
              ],
              "outlet": [
                  "SOURCE Demand Outlet Node",
                  "from_1152"
              ]
          },
          "connecting_node": "SOURCE Demand Outlet Node",
          "loop": [
              "SOURCE Loop:demand"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1139,
          "label": "SOURCE Pump",
          "class": "Pump:VariableSpeed",
          "nodes": {
              "inlet": [
                  "SOURCE Supply Inlet Node",
                  "to_1139"
              ],
              "outlet": [
                  "SOURCE Supply Pump-Heating Node",
                  "from_1139"
              ]
          },
          "connecting_node": "SOURCE Supply Pump-Heating Node",
          "loop": [
              "SOURCE Loop:supply"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1136,
          "label": "SOURCE Supply Splitter",
          "class": "Connector:Splitter",
          "nodes": {
              "inlet_node": {
                  "name": "inlet_node",
                  "type": "inlet"
              },
              "outlet_node1": {
                  "name": "outlet_node1",
                  "type": "outlet"
              }
          },
          "loop": [
              "SOURCE Loop:supply"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1141,
          "label": "SOURCE Purchased Heating",
          "class": "DistrictHeating",
          "nodes": {
              "inlet": [
                  "SOURCE Supply Heating Inlet Node",
                  "to_1141"
              ],
              "outlet": [
                  "SOURCE Supply Heating Outlet Node",
                  "from_1141"
              ]
          },
          "connecting_node": "SOURCE Supply Heating Outlet Node",
          "loop": [
              "SOURCE Loop:supply"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1137,
          "label": "SOURCE Supply Mixer",
          "class": "Connector:Mixer",
          "nodes": {
              "outlet_node": {
                  "name": "outlet_node",
                  "type": "outlet"
              },
              "inlet_node1": {
                  "name": "inlet_node1",
                  "type": "inlet"
              }
          },
          "loop": [
              "SOURCE Loop:supply"
          ]
      }
  },
  {
      "group": "nodes",
      "data": {
          "id": 1143,
          "label": "SOURCE Supply Outlet Pipe",
          "class": "Pipe:Adiabatic",
          "nodes": {
              "inlet": [
                  "SOURCE Supply Heating-Pipe Node",
                  "to_1143"
              ],
              "outlet": [
                  "SOURCE Supply Outlet Node",
                  "from_1143"
              ]
          },
          "connecting_node": "SOURCE Supply Outlet Node",
          "loop": [
              "SOURCE Loop:supply"
          ]
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-1",
          "source": 1114,
          "target": 1111,
          "from_node": "TRANSFER Supply Pump-Heating Node",
          "to_node": "inlet_node"
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-2",
          "source": 1111,
          "target": 1116,
          "from_node": "outlet_node1",
          "to_node": "TRANSFER Supply Heating Inlet Node"
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-3",
          "source": 1116,
          "target": 1112,
          "from_node": "TRANSFER Supply Heating Outlet Node",
          "to_node": "inlet_node1"
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-4",
          "source": 1112,
          "target": 1118,
          "from_node": "outlet_node",
          "to_node": "TRANSFER Supply Heating-Pipe Node"
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-5",
          "source": 1124,
          "target": 1121,
          "from_node": "TRANSFER Demand Pipe-Load Profile Node",
          "to_node": "inlet_node"
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-6",
          "source": 1121,
          "target": 1090,
          "from_node": "outlet_node1",
          "to_node": "TRANSFER Demand HX Inlet Node"
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-7",
          "source": 1090,
          "target": 1122,
          "from_node": "TRANSFER Demand HX Outlet Node",
          "to_node": "inlet_node1"
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-8",
          "source": 1122,
          "target": 1127,
          "from_node": "outlet_node",
          "to_node": "TRANSFER Demand Load Profile-Pipe Node"
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-9",
          "source": 1149,
          "target": 1146,
          "from_node": "SOURCE Demand Pipe-Load Profile Node",
          "to_node": "inlet_node"
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-10",
          "source": 1146,
          "target": 1116,
          "from_node": "outlet_node1",
          "to_node": "SOURCE Demand HX Inlet Node"
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-11",
          "source": 1116,
          "target": 1147,
          "from_node": "SOURCE Demand HX Outlet Node",
          "to_node": "inlet_node1"
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-12",
          "source": 1147,
          "target": 1152,
          "from_node": "outlet_node",
          "to_node": "SOURCE Demand Load Profile-Pipe Node"
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-13",
          "source": 1139,
          "target": 1136,
          "from_node": "SOURCE Supply Pump-Heating Node",
          "to_node": "inlet_node"
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-14",
          "source": 1136,
          "target": 1141,
          "from_node": "outlet_node1",
          "to_node": "SOURCE Supply Heating Inlet Node"
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-15",
          "source": 1141,
          "target": 1137,
          "from_node": "SOURCE Supply Heating Outlet Node",
          "to_node": "inlet_node1"
      }
  },
  {
      "group": "edges",
      "data": {
          "id": "edge-16",
          "source": 1137,
          "target": 1143,
          "from_node": "outlet_node",
          "to_node": "SOURCE Supply Heating-Pipe Node"
      }
  }
]