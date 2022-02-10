export const dataPlantLoop57 = [
  {
    "group": "nodes",
    "data": {
      "id": 4753,
      "label": "CW Circ Pump",
      "class": "Pump:VariableSpeed",
      "nodes": {
        "inlet": [
          "CW Supply Inlet Node",
          "to_4753"
        ],
        "outlet": [
          "CW Pump Outlet Node",
          "from_4753"
        ]
      },
      "connecting_node": "CW Pump Outlet Node",
      "loop": [
        "Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4741,
      "label": "CW Loop Supply Splitter",
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
        "Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4751,
      "label": "Chiller",
      "class": "Chiller:Electric",
      "nodes": {
        "inlet": [
          "Chiller Inlet Node",
          "Chiller Condenser Inlet Node",
          "to_4751"
        ],
        "outlet": [
          "Chiller Outlet Node",
          "Chiller Condenser Outlet Node",
          "from_4751"
        ]
      },
      "connecting_node": "Chiller Outlet Node",
      "loop": [
        "Chilled Water Loop:supply",
        "Condenser Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4754,
      "label": "CW Supply Side Bypass Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "CW Supply Bypass Inlet Node",
          "to_4754"
        ],
        "outlet": [
          "CW Supply Bypass Outlet Node",
          "from_4754"
        ]
      },
      "connecting_node": "CW Supply Bypass Outlet Node",
      "loop": [
        "Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4742,
      "label": "CW Loop Supply Mixer",
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
        "Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4755,
      "label": "CW Supply Side Outlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "CW Supply Side Exit Pipe Inlet Node",
          "to_4755"
        ],
        "outlet": [
          "CW Supply Outlet Node",
          "from_4755"
        ]
      },
      "connecting_node": "CW Supply Outlet Node",
      "loop": [
        "Chilled Water Loop:supply"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4756,
      "label": "CW Demand Side Inlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "CW Demand Inlet Node",
          "to_4756"
        ],
        "outlet": [
          "CW Demand Entrance Pipe Outlet Node",
          "from_4756"
        ]
      },
      "connecting_node": "CW Demand Entrance Pipe Outlet Node",
      "loop": [
        "Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4749,
      "label": "CW Loop Demand Splitter",
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
        "Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4760,
      "label": "Load Profile",
      "class": "LoadProfile:Plant",
      "nodes": {
        "inlet": [
          "Cooling Demand Load Profile Inlet Node",
          "to_4760"
        ],
        "outlet": [
          "Cooling Demand Load Profile Outlet Node",
          "from_4760"
        ]
      },
      "connecting_node": "Cooling Demand Load Profile Outlet Node",
      "loop": [
        "Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4757,
      "label": "CW Demand Side Bypass Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "CW Demand Bypass Inlet Node",
          "to_4757"
        ],
        "outlet": [
          "CW Demand Bypass Outlet Node",
          "from_4757"
        ]
      },
      "connecting_node": "CW Demand Bypass Outlet Node",
      "loop": [
        "Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4750,
      "label": "CW Loop Demand Mixer",
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
        "Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4758,
      "label": "CW Demand Side Outlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "CW Demand Exit Pipe Inlet Node",
          "to_4758"
        ],
        "outlet": [
          "CW Demand Outlet Node",
          "from_4758"
        ]
      },
      "connecting_node": "CW Demand Outlet Node",
      "loop": [
        "Chilled Water Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4793,
      "label": "Condenser Demand Inlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "Condenser Demand Inlet Node",
          "to_4793"
        ],
        "outlet": [
          "Condenser Demand Entrance Pipe Outlet Node",
          "from_4793"
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
      "id": 4784,
      "label": "Condenser Demand Splitter",
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
        "Condenser Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4794,
      "label": "Condenser Demand Bypass Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "Cond Demand Bypass Inlet Node",
          "to_4794"
        ],
        "outlet": [
          "Cond Demand Bypass Outlet Node",
          "from_4794"
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
      "id": 4785,
      "label": "Condenser Demand Mixer",
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
        "Condenser Loop:demand"
      ]
    }
  },
  {
    "group": "nodes",
    "data": {
      "id": 4795,
      "label": "Condenser Demand Outlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "Condenser Demand Exit Pipe Inlet Node",
          "to_4795"
        ],
        "outlet": [
          "Condenser Demand Outlet Node",
          "from_4795"
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
      "id": 4790,
      "label": "Cond Circ Pump",
      "class": "Pump:VariableSpeed",
      "nodes": {
        "inlet": [
          "Condenser Supply Inlet Node",
          "to_4790"
        ],
        "outlet": [
          "Condenser Pump Outlet Node",
          "from_4790"
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
      "id": 4776,
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
      "id": 4786,
      "label": "Cooling Tower",
      "class": "CoolingTower:VariableSpeed",
      "nodes": {
        "inlet": [
          "Condenser Tower Inlet Node",
          "to_4786"
        ],
        "outlet": [
          "Condenser Tower Outlet Node",
          "from_4786"
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
      "id": 4791,
      "label": "Condenser Supply Bypass Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "Cond Supply Bypass Inlet Node",
          "to_4791"
        ],
        "outlet": [
          "Cond Supply Bypass Outlet Node",
          "from_4791"
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
      "id": 4777,
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
      "id": 4792,
      "label": "Condenser Supply Outlet Pipe",
      "class": "Pipe:Adiabatic",
      "nodes": {
        "inlet": [
          "Condenser Supply Exit Pipe Inlet Node",
          "to_4792"
        ],
        "outlet": [
          "Condenser Supply Outlet Node",
          "from_4792"
        ]
      },
      "connecting_node": "Condenser Supply Outlet Node",
      "loop": [
        "Condenser Loop:supply"
      ]
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-1",
      "source": 4753,
      "target": 4741,
      "from_node": "CW Pump Outlet Node",
      "to_node": "inlet_node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-2",
      "source": 4741,
      "target": 4751,
      "from_node": "outlet_node1",
      "to_node": "Chiller Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-3",
      "source": 4741,
      "target": 4754,
      "from_node": "outlet_node2",
      "to_node": "CW Supply Bypass Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-4",
      "source": 4751,
      "target": 4742,
      "from_node": "Chiller Outlet Node",
      "to_node": "inlet_node1"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-5",
      "source": 4754,
      "target": 4742,
      "from_node": "CW Supply Bypass Outlet Node",
      "to_node": "inlet_node2"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-6",
      "source": 4742,
      "target": 4755,
      "from_node": "outlet_node",
      "to_node": "CW Supply Side Exit Pipe Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-7",
      "source": 4756,
      "target": 4749,
      "from_node": "CW Demand Entrance Pipe Outlet Node",
      "to_node": "inlet_node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-8",
      "source": 4749,
      "target": 4760,
      "from_node": "outlet_node1",
      "to_node": "Cooling Demand Load Profile Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-9",
      "source": 4749,
      "target": 4757,
      "from_node": "outlet_node2",
      "to_node": "CW Demand Bypass Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-10",
      "source": 4760,
      "target": 4750,
      "from_node": "Cooling Demand Load Profile Outlet Node",
      "to_node": "inlet_node1"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-11",
      "source": 4757,
      "target": 4750,
      "from_node": "CW Demand Bypass Outlet Node",
      "to_node": "inlet_node2"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-12",
      "source": 4750,
      "target": 4758,
      "from_node": "outlet_node",
      "to_node": "CW Demand Exit Pipe Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-13",
      "source": 4793,
      "target": 4784,
      "from_node": "Condenser Demand Entrance Pipe Outlet Node",
      "to_node": "inlet_node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-14",
      "source": 4784,
      "target": 4751,
      "from_node": "outlet_node1",
      "to_node": "Chiller Condenser Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-15",
      "source": 4784,
      "target": 4794,
      "from_node": "outlet_node2",
      "to_node": "Cond Demand Bypass Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-16",
      "source": 4751,
      "target": 4785,
      "from_node": "Chiller Condenser Outlet Node",
      "to_node": "inlet_node1"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-17",
      "source": 4794,
      "target": 4785,
      "from_node": "Cond Demand Bypass Outlet Node",
      "to_node": "inlet_node2"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-18",
      "source": 4785,
      "target": 4795,
      "from_node": "outlet_node",
      "to_node": "Condenser Demand Exit Pipe Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-19",
      "source": 4790,
      "target": 4776,
      "from_node": "Condenser Pump Outlet Node",
      "to_node": "inlet_node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-20",
      "source": 4776,
      "target": 4786,
      "from_node": "outlet_node1",
      "to_node": "Condenser Tower Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-21",
      "source": 4776,
      "target": 4791,
      "from_node": "outlet_node2",
      "to_node": "Cond Supply Bypass Inlet Node"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-22",
      "source": 4786,
      "target": 4777,
      "from_node": "Condenser Tower Outlet Node",
      "to_node": "inlet_node1"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-23",
      "source": 4791,
      "target": 4777,
      "from_node": "Cond Supply Bypass Outlet Node",
      "to_node": "inlet_node2"
    }
  },
  {
    "group": "edges",
    "data": {
      "id": "edge-24",
      "source": 4777,
      "target": 4792,
      "from_node": "outlet_node",
      "to_node": "Condenser Supply Exit Pipe Inlet Node"
    }
  }
]