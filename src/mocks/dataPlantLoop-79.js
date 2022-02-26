export const dataPlantLoop79 = [
  {
    "group": "nodes",
    "data": {
      "id": 4921,
      "label": "CW Sec Circ Pump",
      "class": "Pump:VariableSpeed",
      "nodes": {
        "inlet": [
          "CW Sec Supply Inlet Node",
          "to_4921"
        ],
        "outlet": [
          "CW Sec Circ Pump Outlet Node",
          "from_4921"
        ]
      },
      "connecting_node": "CW Sec Circ Pump Outlet Node",
      "loop": [
        "Secondary Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4919,
      "label": "CW Sec Supply Splitter",
      "class": "Connector:Splitter",
      "nodes": {
        "inlet": [
          "inlet_node"
        ],
        "outlet": [
          "outlet_node1",
          "outlet_node2"
        ]
      },
      "loop": [
        "Secondary Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4922,
      "label": "Plate Heat Exchanger",
      "class": "HeatExchanger:FluidToFluid",
      "nodes": {
        "inlet": [
          "PHE Demand Inlet Node",
          "PHE Supply Inlet Node",
          "to_4922"
        ],
        "outlet": [
          "PHE Demand Outlet Node",
          "PHE Supply Outlet Node",
          "from_4922"
        ]
      },
      "connecting_node": "PHE Supply Outlet Node",
      "loop": [
        "Secondary Chilled Water Loop:supply",
        "Primary Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4923,
      "label": "CW Sec Supply Bypass Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "CW Sec Supply Bypass Inlet Node",
          "to_4923"
        ],
        "outlet": [
          "CW Sec Supply Bypass Outlet Node",
          "from_4923"
        ]
      },
      "connecting_node": "CW Sec Supply Bypass Outlet Node",
      "loop": [
        "Secondary Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4920,
      "label": "CW Sec Supply Mixer",
      "class": "Connector:Mixer",
      "nodes": {
        "outlet": [
          "outlet_node"
        ],
        "inlet": [
          "inlet_node1",
          "inlet_node2"
        ]
      },
      "loop": [
        "Secondary Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4924,
      "label": "CW Sec Supply Outlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "CW Sec Supply Exit Pipe Inlet Node",
          "to_4924"
        ],
        "outlet": [
          "CW Sec Supply Outlet Node",
          "from_4924"
        ]
      },
      "connecting_node": "CW Sec Supply Outlet Node",
      "loop": [
        "Secondary Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4933,
      "label": "CW Sec Demand Inlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "CW Sec Demand Inlet Node",
          "to_4933"
        ],
        "outlet": [
          "CW Sec Demand Entrance Pipe Outlet Node",
          "from_4933"
        ]
      },
      "connecting_node": "CW Sec Demand Entrance Pipe Outlet Node",
      "loop": [
        "Secondary Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4931,
      "label": "CW Sec Demand Splitter",
      "class": "Connector:Splitter",
      "nodes": {
        "inlet": [
          "inlet_node"
        ],
        "outlet": [
          "outlet_node1",
          "outlet_node2"
        ]
      },
      "loop": [
        "Secondary Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4934,
      "label": "Detailed Cooling Coil",
      "class": "Coil:Cooling:Water:DetailedGeometry",
      "nodes": {
        "inlet": [
          "Cooling Coil Air Inlet Node",
          "Cooling Coil Water Inlet Node",
          "to_4934"
        ],
        "outlet": [
          "Air Loop Outlet Node",
          "Cooling Coil Water Outlet Node",
          "from_4934"
        ]
      },
      "connecting_node": "Cooling Coil Water Outlet Node",
      "loop": [
        "Secondary Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4935,
      "label": "CW Sec Demand Bypass Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "CW Sec Demand Bypass Pipe Inlet Node",
          "to_4935"
        ],
        "outlet": [
          "CW Sec Demand Bypass Pipe Outlet Node",
          "from_4935"
        ]
      },
      "connecting_node": "CW Sec Demand Bypass Pipe Outlet Node",
      "loop": [
        "Secondary Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4932,
      "label": "CW Sec Demand Mixer",
      "class": "Connector:Mixer",
      "nodes": {
        "outlet": [
          "outlet_node"
        ],
        "inlet": [
          "inlet_node1",
          "inlet_node2"
        ]
      },
      "loop": [
        "Secondary Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4936,
      "label": "CW Sec Demand Outlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "CW Sec Demand Exit Pipe Inlet Node",
          "to_4936"
        ],
        "outlet": [
          "CW Sec Demand Outlet Node",
          "from_4936"
        ]
      },
      "connecting_node": "CW Sec Demand Outlet Node",
      "loop": [
        "Secondary Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4970,
      "label": "CW Primary Demand Inlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "CW Primary Demand Inlet Node",
          "to_4970"
        ],
        "outlet": [
          "CW Primary Demand Entrance Pipe Outlet Node",
          "from_4970"
        ]
      },
      "connecting_node": "CW Primary Demand Entrance Pipe Outlet Node",
      "loop": [
        "Primary Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4968,
      "label": "CW Primary Demand Splitter",
      "class": "Connector:Splitter",
      "nodes": {
        "inlet": [
          "inlet_node"
        ],
        "outlet": [
          "outlet_node1",
          "outlet_node2"
        ]
      },
      "loop": [
        "Primary Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4971,
      "label": "CW Primary Demand Side Bypass Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "CW Primary Demand Bypass Inlet Node",
          "to_4971"
        ],
        "outlet": [
          "CW Primary Demand Bypass Outlet Node",
          "from_4971"
        ]
      },
      "connecting_node": "CW Primary Demand Bypass Outlet Node",
      "loop": [
        "Primary Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4969,
      "label": "CW Primary Demand Mixer",
      "class": "Connector:Mixer",
      "nodes": {
        "outlet": [
          "outlet_node"
        ],
        "inlet": [
          "inlet_node1",
          "inlet_node2"
        ]
      },
      "loop": [
        "Primary Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4972,
      "label": "CW Primary Demand Side Outlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "CW Primary Demand Exit Pipe Inlet Node",
          "to_4972"
        ],
        "outlet": [
          "CW Primary Demand Outlet Node",
          "from_4972"
        ]
      },
      "connecting_node": "CW Primary Demand Outlet Node",
      "loop": [
        "Primary Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4961,
      "label": "CW Primary Circ Pump",
      "class": "Pump:ConstantSpeed",
      "nodes": {
        "inlet": [
          "CW Primary Supply Inlet Node",
          "to_4961"
        ],
        "outlet": [
          "CW Primary Pump Outlet Node",
          "from_4961"
        ]
      },
      "connecting_node": "CW Primary Pump Outlet Node",
      "loop": [
        "Primary Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4952,
      "label": "CW Primary Supply Splitter",
      "class": "Connector:Splitter",
      "nodes": {
        "inlet": [
          "inlet_node"
        ],
        "outlet": [
          "outlet_node1",
          "outlet_node2",
          "outlet_node3",
          "outlet_node4"
        ]
      },
      "loop": [
        "Primary Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4959,
      "label": "Little Chiller",
      "class": "Chiller:ConstantCOP",
      "nodes": {
        "inlet": [
          "Little Chiller Inlet Node",
          "Little Chiller Condenser Inlet Node",
          "to_4959"
        ],
        "outlet": [
          "Little Chiller Outlet Node",
          "Little Chiller Condenser Outlet Node",
          "from_4959"
        ]
      },
      "connecting_node": "Little Chiller Outlet Node",
      "loop": [
        "Primary Chilled Water Loop:supply",
        "Condenser Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4957,
      "label": "Big Chiller",
      "class": "Chiller:Electric",
      "nodes": {
        "inlet": [
          "Big Chiller Inlet Node",
          "Big Chiller Condenser Inlet Node",
          "to_4957"
        ],
        "outlet": [
          "Big Chiller Outlet Node",
          "Big Chiller Condenser Outlet Node",
          "from_4957"
        ]
      },
      "connecting_node": "Big Chiller Outlet Node",
      "loop": [
        "Primary Chilled Water Loop:supply",
        "Condenser Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4956,
      "label": "Purchased Cooling",
      "class": "DistrictCooling",
      "nodes": {
        "inlet": [
          "Purchased Cooling Inlet Node",
          "to_4956"
        ],
        "outlet": [
          "Purchased Cooling Outlet Node",
          "from_4956"
        ]
      },
      "connecting_node": "Purchased Cooling Outlet Node",
      "loop": [
        "Primary Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4955,
      "label": "CW Primary Supply Side Bypass Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "CW Primary Supply Bypass Inlet Node",
          "to_4955"
        ],
        "outlet": [
          "CW Primary Supply Bypass Outlet Node",
          "from_4955"
        ]
      },
      "connecting_node": "CW Primary Supply Bypass Outlet Node",
      "loop": [
        "Primary Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4953,
      "label": "CW Primary Supply Mixer",
      "class": "Connector:Mixer",
      "nodes": {
        "outlet": [
          "outlet_node"
        ],
        "inlet": [
          "inlet_node1",
          "inlet_node2",
          "inlet_node3",
          "inlet_node4"
        ]
      },
      "loop": [
        "Primary Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4954,
      "label": "CW Primary Supply Side Outlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "CW Primary Supply Side Exit Pipe Inlet Node",
          "to_4954"
        ],
        "outlet": [
          "CW Primary Supply Outlet Node",
          "from_4954"
        ]
      },
      "connecting_node": "CW Primary Supply Outlet Node",
      "loop": [
        "Primary Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4997,
      "label": "Condenser Demand Inlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "Condenser Demand Inlet Node",
          "to_4997"
        ],
        "outlet": [
          "Condenser Demand Entrance Pipe Outlet Node",
          "from_4997"
        ]
      },
      "connecting_node": "Condenser Demand Entrance Pipe Outlet Node",
      "loop": [
        "Condenser Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5004,
      "label": "Condenser Demand Splitter",
      "class": "Connector:Splitter",
      "nodes": {
        "inlet": [
          "inlet_node"
        ],
        "outlet": [
          "outlet_node1",
          "outlet_node2",
          "outlet_node3"
        ]
      },
      "loop": [
        "Condenser Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5001,
      "label": "Condenser Demand Side Bypass Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "Cond Demand Bypass Inlet Node",
          "to_5001"
        ],
        "outlet": [
          "Cond Demand Bypass Outlet Node",
          "from_5001"
        ]
      },
      "connecting_node": "Cond Demand Bypass Outlet Node",
      "loop": [
        "Condenser Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5005,
      "label": "Condenser Demand Mixer",
      "class": "Connector:Mixer",
      "nodes": {
        "outlet": [
          "outlet_node"
        ],
        "inlet": [
          "inlet_node1",
          "inlet_node2",
          "inlet_node3"
        ]
      },
      "loop": [
        "Condenser Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5003,
      "label": "Condenser Demand Outlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "Condenser Demand Exit Pipe Inlet Node",
          "to_5003"
        ],
        "outlet": [
          "Condenser Demand Outlet Node",
          "from_5003"
        ]
      },
      "connecting_node": "Condenser Demand Outlet Node",
      "loop": [
        "Condenser Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5012,
      "label": "Cond Circ Pump",
      "class": "Pump:VariableSpeed",
      "nodes": {
        "inlet": [
          "Condenser Supply Inlet Node",
          "to_5012"
        ],
        "outlet": [
          "Condenser Pump Outlet Node",
          "from_5012"
        ]
      },
      "connecting_node": "Condenser Pump Outlet Node",
      "loop": [
        "Condenser Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5006,
      "label": "Condenser Supply Splitter",
      "class": "Connector:Splitter",
      "nodes": {
        "inlet": [
          "inlet_node"
        ],
        "outlet": [
          "outlet_node1",
          "outlet_node2"
        ]
      },
      "loop": [
        "Condenser Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5011,
      "label": "Big Tower",
      "class": "CoolingTower:SingleSpeed",
      "nodes": {
        "inlet": [
          "Condenser Tower Inlet Node",
          "to_5011"
        ],
        "outlet": [
          "Condenser Tower Outlet Node",
          "from_5011"
        ]
      },
      "connecting_node": "Condenser Tower Outlet Node",
      "loop": [
        "Condenser Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4991,
      "label": "Condenser Supply Side Bypass Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "Cond Supply Bypass Inlet Node",
          "to_4991"
        ],
        "outlet": [
          "Cond Supply Bypass Outlet Node",
          "from_4991"
        ]
      },
      "connecting_node": "Cond Supply Bypass Outlet Node",
      "loop": [
        "Condenser Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5007,
      "label": "Condenser Supply Mixer",
      "class": "Connector:Mixer",
      "nodes": {
        "outlet": [
          "outlet_node"
        ],
        "inlet": [
          "inlet_node1",
          "inlet_node2"
        ]
      },
      "loop": [
        "Condenser Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4993,
      "label": "Condenser Supply Outlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "Condenser Supply Exit Pipe Inlet Node",
          "to_4993"
        ],
        "outlet": [
          "Condenser Supply Outlet Node",
          "from_4993"
        ]
      },
      "connecting_node": "Condenser Supply Outlet Node",
      "loop": [
        "Condenser Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5041,
      "label": "HW Circ Pump",
      "class": "Pump:VariableSpeed",
      "nodes": {
        "inlet": [
          "HW Supply Inlet Node",
          "to_5041"
        ],
        "outlet": [
          "HW Pump Outlet Node",
          "from_5041"
        ]
      },
      "connecting_node": "HW Pump Outlet Node",
      "loop": [
        "Hot Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5036,
      "label": "Heating Supply Splitter",
      "class": "Connector:Splitter",
      "nodes": {
        "inlet": [
          "inlet_node"
        ],
        "outlet": [
          "outlet_node1",
          "outlet_node2"
        ]
      },
      "loop": [
        "Hot Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5042,
      "label": "Purchased Heating",
      "class": "DistrictHeating",
      "nodes": {
        "inlet": [
          "Purchased Heat Inlet Node",
          "to_5042"
        ],
        "outlet": [
          "Purchased Heat Outlet Node",
          "from_5042"
        ]
      },
      "connecting_node": "Purchased Heat Outlet Node",
      "loop": [
        "Hot Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5020,
      "label": "Heating Supply Bypass Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "Heating Supply Bypass Inlet Node",
          "to_5020"
        ],
        "outlet": [
          "Heating Supply Bypass Outlet Node",
          "from_5020"
        ]
      },
      "connecting_node": "Heating Supply Bypass Outlet Node",
      "loop": [
        "Hot Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5037,
      "label": "Heating Supply Mixer",
      "class": "Connector:Mixer",
      "nodes": {
        "outlet": [
          "outlet_node"
        ],
        "inlet": [
          "inlet_node1",
          "inlet_node2"
        ]
      },
      "loop": [
        "Hot Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5022,
      "label": "Heating Supply Outlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "Heating Supply Exit Pipe Inlet Node",
          "to_5022"
        ],
        "outlet": [
          "HW Supply Outlet Node",
          "from_5022"
        ]
      },
      "connecting_node": "HW Supply Outlet Node",
      "loop": [
        "Hot Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5026,
      "label": "Reheat Inlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "HW Demand Inlet Node",
          "to_5026"
        ],
        "outlet": [
          "HW Demand Entrance Pipe Outlet Node",
          "from_5026"
        ]
      },
      "connecting_node": "HW Demand Entrance Pipe Outlet Node",
      "loop": [
        "Hot Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5034,
      "label": "Reheat Splitter",
      "class": "Connector:Splitter",
      "nodes": {
        "inlet": [
          "inlet_node"
        ],
        "outlet": [
          "outlet_node1",
          "outlet_node2",
          "outlet_node3",
          "outlet_node4"
        ]
      },
      "loop": [
        "Hot Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5067,
      "label": "Reheat Coil Zone 1",
      "class": "Coil:Heating:Water",
      "nodes": {
        "inlet": [
          "Zone 1 Reheat Air Inlet Node",
          "Zone 1 Reheat Water Inlet Node",
          "to_5067"
        ],
        "outlet": [
          "Zone 1 Reheat Air Outlet Node",
          "Zone 1 Reheat Water Outlet Node",
          "from_5067"
        ]
      },
      "connecting_node": "Zone 1 Reheat Water Outlet Node",
      "loop": [
        "Hot Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5068,
      "label": "Reheat Coil Zone 2",
      "class": "Coil:Heating:Water",
      "nodes": {
        "inlet": [
          "Zone 2 Reheat Air Inlet Node",
          "Zone 2 Reheat Water Inlet Node",
          "to_5068"
        ],
        "outlet": [
          "Zone 2 Reheat Air Outlet Node",
          "Zone 2 Reheat Water Outlet Node",
          "from_5068"
        ]
      },
      "connecting_node": "Zone 2 Reheat Water Outlet Node",
      "loop": [
        "Hot Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5069,
      "label": "Reheat Coil Zone 3",
      "class": "Coil:Heating:Water",
      "nodes": {
        "inlet": [
          "Zone 3 Reheat Air Inlet Node",
          "Zone 3 Reheat Water Inlet Node",
          "to_5069"
        ],
        "outlet": [
          "Zone 3 Reheat Air Outlet Node",
          "Zone 3 Reheat Water Outlet Node",
          "from_5069"
        ]
      },
      "connecting_node": "Zone 3 Reheat Water Outlet Node",
      "loop": [
        "Hot Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5033,
      "label": "Reheat Bypass",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "Reheat Bypass Inlet Node",
          "to_5033"
        ],
        "outlet": [
          "Reheat Bypass Outlet Node",
          "from_5033"
        ]
      },
      "connecting_node": "Reheat Bypass Outlet Node",
      "loop": [
        "Hot Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5035,
      "label": "Reheat Mixer",
      "class": "Connector:Mixer",
      "nodes": {
        "outlet": [
          "outlet_node"
        ],
        "inlet": [
          "inlet_node1",
          "inlet_node2",
          "inlet_node3",
          "inlet_node4"
        ]
      },
      "loop": [
        "Hot Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 5028,
      "label": "Reheat Outlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "HW Demand Exit Pipe Inlet Node",
          "to_5028"
        ],
        "outlet": [
          "HW Demand Outlet Node",
          "from_5028"
        ]
      },
      "connecting_node": "HW Demand Outlet Node",
      "loop": [
        "Hot Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4867,
      "label": "West Zone",
      "class": "Zone",
      "nodes": {
        "inlet": [
          "to_4867"
        ],
        "outlet": [
          "from_4867"
        ]
      },
      "loop": [
        "Hot Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4880,
      "label": "Zn001:Wall001:Win001",
      "class": "FenestrationSurface:Detailed",
      "nodes": {
        "inlet": [
          "to_4880"
        ],
        "outlet": [
          "from_4880"
        ]
      },
      "loop": [
        "Hot Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4868,
      "label": "EAST ZONE",
      "class": "Zone",
      "nodes": {
        "inlet": [
          "to_4868"
        ],
        "outlet": [
          "from_4868"
        ]
      },
      "loop": [
        "Hot Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4869,
      "label": "NORTH ZONE",
      "class": "Zone",
      "nodes": {
        "inlet": [
          "to_4869"
        ],
        "outlet": [
          "from_4869"
        ]
      },
      "loop": [
        "Hot Water Loop:demand"
      ]
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-1",
      "source": 4921,
      "target": 4919,
      "from_node": "CW Sec Circ Pump Outlet Node",
      "to_node": "inlet_node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-2",
      "source": 4919,
      "target": 4922,
      "from_node": "outlet_node1",
      "to_node": "PHE Supply Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-3",
      "source": 4919,
      "target": 4923,
      "from_node": "outlet_node2",
      "to_node": "CW Sec Supply Bypass Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-4",
      "source": 4922,
      "target": 4920,
      "from_node": "PHE Supply Outlet Node",
      "to_node": "inlet_node1"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-5",
      "source": 4923,
      "target": 4920,
      "from_node": "CW Sec Supply Bypass Outlet Node",
      "to_node": "inlet_node2"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-6",
      "source": 4920,
      "target": 4924,
      "from_node": "outlet_node",
      "to_node": "CW Sec Supply Exit Pipe Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-7",
      "source": 4933,
      "target": 4931,
      "from_node": "CW Sec Demand Entrance Pipe Outlet Node",
      "to_node": "inlet_node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-8",
      "source": 4931,
      "target": 4934,
      "from_node": "outlet_node1",
      "to_node": "Cooling Coil Water Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-9",
      "source": 4931,
      "target": 4935,
      "from_node": "outlet_node2",
      "to_node": "CW Sec Demand Bypass Pipe Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-10",
      "source": 4934,
      "target": 4932,
      "from_node": "Cooling Coil Water Outlet Node",
      "to_node": "inlet_node1"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-11",
      "source": 4935,
      "target": 4932,
      "from_node": "CW Sec Demand Bypass Pipe Outlet Node",
      "to_node": "inlet_node2"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-12",
      "source": 4932,
      "target": 4936,
      "from_node": "outlet_node",
      "to_node": "CW Sec Demand Exit Pipe Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-13",
      "source": 4970,
      "target": 4968,
      "from_node": "CW Primary Demand Entrance Pipe Outlet Node",
      "to_node": "inlet_node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-14",
      "source": 4968,
      "target": 4971,
      "from_node": "outlet_node1",
      "to_node": "CW Primary Demand Bypass Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-15",
      "source": 4968,
      "target": 4922,
      "from_node": "outlet_node2",
      "to_node": "PHE Demand Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-16",
      "source": 4922,
      "target": 4969,
      "from_node": "PHE Demand Outlet Node",
      "to_node": "inlet_node1"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-17",
      "source": 4971,
      "target": 4969,
      "from_node": "CW Primary Demand Bypass Outlet Node",
      "to_node": "inlet_node2"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-18",
      "source": 4969,
      "target": 4972,
      "from_node": "outlet_node",
      "to_node": "CW Primary Demand Exit Pipe Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-19",
      "source": 4961,
      "target": 4952,
      "from_node": "CW Primary Pump Outlet Node",
      "to_node": "inlet_node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-20",
      "source": 4952,
      "target": 4959,
      "from_node": "outlet_node1",
      "to_node": "Little Chiller Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-21",
      "source": 4952,
      "target": 4957,
      "from_node": "outlet_node2",
      "to_node": "Big Chiller Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-22",
      "source": 4952,
      "target": 4956,
      "from_node": "outlet_node3",
      "to_node": "Purchased Cooling Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-23",
      "source": 4952,
      "target": 4955,
      "from_node": "outlet_node4",
      "to_node": "CW Primary Supply Bypass Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-24",
      "source": 4959,
      "target": 4953,
      "from_node": "Little Chiller Outlet Node",
      "to_node": "inlet_node1"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-25",
      "source": 4957,
      "target": 4953,
      "from_node": "Big Chiller Outlet Node",
      "to_node": "inlet_node2"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-26",
      "source": 4956,
      "target": 4953,
      "from_node": "Purchased Cooling Outlet Node",
      "to_node": "inlet_node3"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-27",
      "source": 4955,
      "target": 4953,
      "from_node": "CW Primary Supply Bypass Outlet Node",
      "to_node": "inlet_node4"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-28",
      "source": 4953,
      "target": 4954,
      "from_node": "outlet_node",
      "to_node": "CW Primary Supply Side Exit Pipe Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-29",
      "source": 4997,
      "target": 5004,
      "from_node": "Condenser Demand Entrance Pipe Outlet Node",
      "to_node": "inlet_node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-30",
      "source": 5004,
      "target": 4957,
      "from_node": "outlet_node1",
      "to_node": "Big Chiller Condenser Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-31",
      "source": 5004,
      "target": 4959,
      "from_node": "outlet_node2",
      "to_node": "Little Chiller Condenser Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-32",
      "source": 5004,
      "target": 5001,
      "from_node": "outlet_node3",
      "to_node": "Cond Demand Bypass Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-33",
      "source": 4957,
      "target": 5005,
      "from_node": "Big Chiller Condenser Outlet Node",
      "to_node": "inlet_node1"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-34",
      "source": 4959,
      "target": 5005,
      "from_node": "Little Chiller Condenser Outlet Node",
      "to_node": "inlet_node2"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-35",
      "source": 5001,
      "target": 5005,
      "from_node": "Cond Demand Bypass Outlet Node",
      "to_node": "inlet_node3"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-36",
      "source": 5005,
      "target": 5003,
      "from_node": "outlet_node",
      "to_node": "Condenser Demand Exit Pipe Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-37",
      "source": 5012,
      "target": 5006,
      "from_node": "Condenser Pump Outlet Node",
      "to_node": "inlet_node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-38",
      "source": 5006,
      "target": 5011,
      "from_node": "outlet_node1",
      "to_node": "Condenser Tower Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-39",
      "source": 5006,
      "target": 4991,
      "from_node": "outlet_node2",
      "to_node": "Cond Supply Bypass Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-40",
      "source": 5011,
      "target": 5007,
      "from_node": "Condenser Tower Outlet Node",
      "to_node": "inlet_node1"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-41",
      "source": 4991,
      "target": 5007,
      "from_node": "Cond Supply Bypass Outlet Node",
      "to_node": "inlet_node2"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-42",
      "source": 5007,
      "target": 4993,
      "from_node": "outlet_node",
      "to_node": "Condenser Supply Exit Pipe Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-43",
      "source": 5041,
      "target": 5036,
      "from_node": "HW Pump Outlet Node",
      "to_node": "inlet_node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-44",
      "source": 5036,
      "target": 5042,
      "from_node": "outlet_node1",
      "to_node": "Purchased Heat Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-45",
      "source": 5036,
      "target": 5020,
      "from_node": "outlet_node2",
      "to_node": "Heating Supply Bypass Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-46",
      "source": 5042,
      "target": 5037,
      "from_node": "Purchased Heat Outlet Node",
      "to_node": "inlet_node1"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-47",
      "source": 5020,
      "target": 5037,
      "from_node": "Heating Supply Bypass Outlet Node",
      "to_node": "inlet_node2"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-48",
      "source": 5037,
      "target": 5022,
      "from_node": "outlet_node",
      "to_node": "Heating Supply Exit Pipe Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-49",
      "source": 5026,
      "target": 5034,
      "from_node": "HW Demand Entrance Pipe Outlet Node",
      "to_node": "inlet_node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-50",
      "source": 5034,
      "target": 5067,
      "from_node": "outlet_node1",
      "to_node": "Zone 1 Reheat Water Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-51",
      "source": 5034,
      "target": 5068,
      "from_node": "outlet_node2",
      "to_node": "Zone 2 Reheat Water Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-52",
      "source": 5034,
      "target": 5069,
      "from_node": "outlet_node3",
      "to_node": "Zone 3 Reheat Water Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-53",
      "source": 5034,
      "target": 5033,
      "from_node": "outlet_node4",
      "to_node": "Reheat Bypass Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-54",
      "source": 5067,
      "target": 5035,
      "from_node": "Zone 1 Reheat Water Outlet Node",
      "to_node": "inlet_node1"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-55",
      "source": 5068,
      "target": 5035,
      "from_node": "Zone 2 Reheat Water Outlet Node",
      "to_node": "inlet_node2"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-56",
      "source": 5069,
      "target": 5035,
      "from_node": "Zone 3 Reheat Water Outlet Node",
      "to_node": "inlet_node3"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-57",
      "source": 5033,
      "target": 5035,
      "from_node": "Reheat Bypass Outlet Node",
      "to_node": "inlet_node4"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-58",
      "source": 5035,
      "target": 5028,
      "from_node": "outlet_node",
      "to_node": "HW Demand Exit Pipe Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-59",
      "source": 4867,
      "target": 4880,
      "from_node": "from_4867",
      "to_node": "to_4880"
    }
  }
]