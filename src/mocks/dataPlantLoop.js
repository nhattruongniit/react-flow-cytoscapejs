export const dataPlantLoop = [{
        "group": "nodes",
        "data": {
            "id": 1344,
            "label": "CW Circ Pump",
            "class": "Pump:VariableSpeed",
            "nodes": {
                "inlet": [
                    "CW Supply Inlet Node",
                    "to_1344"
                ],
                "outlet": [
                    "CW Pump Outlet Node",
                    "from_1344"
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
            "id": 1332,
            "label": "CW Loop Supply Splitter",
            "class": "Connector:Splitter",
            "nodes": {
                "inlet_node": {
                    "name": "inlet_node",
                    "type": "inlet"
                },
                "outlet_node1": {
                    "name": "outlet_node1",
                    "type": "outlet"
                },
                "outlet_node2": {
                    "name": "outlet_node2",
                    "type": "outlet"
                }
            },
            "loop": [
                "Chilled Water Loop:supply"
            ]
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1342,
            "label": "Chiller",
            "class": "Chiller:Electric",
            "nodes": {
                "inlet": [
                    "Chiller Inlet Node",
                    "Chiller Condenser Inlet Node",
                    "to_1342"
                ],
                "outlet": [
                    "Chiller Outlet Node",
                    "Chiller Condenser Outlet Node",
                    "from_1342"
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
            "id": 1345,
            "label": "CW Supply Side Bypass Pipe",
            "class": "Pipe:Adiabatic",
            "nodes": {
                "inlet": [
                    "CW Supply Bypass Inlet Node",
                    "to_1345"
                ],
                "outlet": [
                    "CW Supply Bypass Outlet Node",
                    "from_1345"
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
            "id": 1333,
            "label": "CW Loop Supply Mixer",
            "class": "Connector:Mixer",
            "nodes": {
                "outlet_node": {
                    "name": "outlet_node",
                    "type": "outlet"
                },
                "inlet_node1": {
                    "name": "inlet_node1",
                    "type": "inlet"
                },
                "inlet_node2": {
                    "name": "inlet_node2",
                    "type": "inlet"
                }
            },
            "loop": [
                "Chilled Water Loop:supply"
            ]
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1346,
            "label": "CW Supply Side Outlet Pipe",
            "class": "Pipe:Adiabatic",
            "nodes": {
                "inlet": [
                    "CW Supply Side Exit Pipe Inlet Node",
                    "to_1346"
                ],
                "outlet": [
                    "CW Supply Outlet Node",
                    "from_1346"
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
            "id": 1347,
            "label": "CW Demand Side Inlet Pipe",
            "class": "Pipe:Adiabatic",
            "nodes": {
                "inlet": [
                    "CW Demand Inlet Node",
                    "to_1347"
                ],
                "outlet": [
                    "CW Demand Entrance Pipe Outlet Node",
                    "from_1347"
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
            "id": 1340,
            "label": "CW Loop Demand Splitter",
            "class": "Connector:Splitter",
            "nodes": {
                "inlet_node": {
                    "name": "inlet_node",
                    "type": "inlet"
                },
                "outlet_node1": {
                    "name": "outlet_node1",
                    "type": "outlet"
                },
                "outlet_node2": {
                    "name": "outlet_node2",
                    "type": "outlet"
                }
            },
            "loop": [
                "Chilled Water Loop:demand"
            ]
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1351,
            "label": "Load Profile",
            "class": "LoadProfile:Plant",
            "nodes": {
                "inlet": [
                    "Cooling Demand Load Profile Inlet Node",
                    "to_1351"
                ],
                "outlet": [
                    "Cooling Demand Load Profile Outlet Node",
                    "from_1351"
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
            "id": 1348,
            "label": "CW Demand Side Bypass Pipe",
            "class": "Pipe:Adiabatic",
            "nodes": {
                "inlet": [
                    "CW Demand Bypass Inlet Node",
                    "to_1348"
                ],
                "outlet": [
                    "CW Demand Bypass Outlet Node",
                    "from_1348"
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
            "id": 1341,
            "label": "CW Loop Demand Mixer",
            "class": "Connector:Mixer",
            "nodes": {
                "outlet_node": {
                    "name": "outlet_node",
                    "type": "outlet"
                },
                "inlet_node1": {
                    "name": "inlet_node1",
                    "type": "inlet"
                },
                "inlet_node2": {
                    "name": "inlet_node2",
                    "type": "inlet"
                }
            },
            "loop": [
                "Chilled Water Loop:demand"
            ]
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1349,
            "label": "CW Demand Side Outlet Pipe",
            "class": "Pipe:Adiabatic",
            "nodes": {
                "inlet": [
                    "CW Demand Exit Pipe Inlet Node",
                    "to_1349"
                ],
                "outlet": [
                    "CW Demand Outlet Node",
                    "from_1349"
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
            "id": 1384,
            "label": "Condenser Demand Inlet Pipe",
            "class": "Pipe:Adiabatic",
            "nodes": {
                "inlet": [
                    "Condenser Demand Inlet Node",
                    "to_1384"
                ],
                "outlet": [
                    "Condenser Demand Entrance Pipe Outlet Node",
                    "from_1384"
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
            "id": 1375,
            "label": "Condenser Demand Splitter",
            "class": "Connector:Splitter",
            "nodes": {
                "inlet_node": {
                    "name": "inlet_node",
                    "type": "inlet"
                },
                "outlet_node1": {
                    "name": "outlet_node1",
                    "type": "outlet"
                },
                "outlet_node2": {
                    "name": "outlet_node2",
                    "type": "outlet"
                }
            },
            "loop": [
                "Condenser Loop:demand"
            ]
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1385,
            "label": "Condenser Demand Bypass Pipe",
            "class": "Pipe:Adiabatic",
            "nodes": {
                "inlet": [
                    "Cond Demand Bypass Inlet Node",
                    "to_1385"
                ],
                "outlet": [
                    "Cond Demand Bypass Outlet Node",
                    "from_1385"
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
            "id": 1376,
            "label": "Condenser Demand Mixer",
            "class": "Connector:Mixer",
            "nodes": {
                "outlet_node": {
                    "name": "outlet_node",
                    "type": "outlet"
                },
                "inlet_node1": {
                    "name": "inlet_node1",
                    "type": "inlet"
                },
                "inlet_node2": {
                    "name": "inlet_node2",
                    "type": "inlet"
                }
            },
            "loop": [
                "Condenser Loop:demand"
            ]
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1386,
            "label": "Condenser Demand Outlet Pipe",
            "class": "Pipe:Adiabatic",
            "nodes": {
                "inlet": [
                    "Condenser Demand Exit Pipe Inlet Node",
                    "to_1386"
                ],
                "outlet": [
                    "Condenser Demand Outlet Node",
                    "from_1386"
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
            "id": 1381,
            "label": "Cond Circ Pump",
            "class": "Pump:VariableSpeed",
            "nodes": {
                "inlet": [
                    "Condenser Supply Inlet Node",
                    "to_1381"
                ],
                "outlet": [
                    "Condenser Pump Outlet Node",
                    "from_1381"
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
            "id": 1367,
            "label": "Condenser Supply Splitter",
            "class": "Connector:Splitter",
            "nodes": {
                "inlet_node": {
                    "name": "inlet_node",
                    "type": "inlet"
                },
                "outlet_node1": {
                    "name": "outlet_node1",
                    "type": "outlet"
                },
                "outlet_node2": {
                    "name": "outlet_node2",
                    "type": "outlet"
                }
            },
            "loop": [
                "Condenser Loop:supply"
            ]
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1377,
            "label": "Cooling Tower",
            "class": "CoolingTower:VariableSpeed",
            "nodes": {
                "inlet": [
                    "Condenser Tower Inlet Node",
                    "to_1377"
                ],
                "outlet": [
                    "Condenser Tower Outlet Node",
                    "from_1377"
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
            "id": 1382,
            "label": "Condenser Supply Bypass Pipe",
            "class": "Pipe:Adiabatic",
            "nodes": {
                "inlet": [
                    "Cond Supply Bypass Inlet Node",
                    "to_1382"
                ],
                "outlet": [
                    "Cond Supply Bypass Outlet Node",
                    "from_1382"
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
            "id": 1368,
            "label": "Condenser Supply Mixer",
            "class": "Connector:Mixer",
            "nodes": {
                "outlet_node": {
                    "name": "outlet_node",
                    "type": "outlet"
                },
                "inlet_node1": {
                    "name": "inlet_node1",
                    "type": "inlet"
                },
                "inlet_node2": {
                    "name": "inlet_node2",
                    "type": "inlet"
                }
            },
            "loop": [
                "Condenser Loop:supply"
            ]
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1383,
            "label": "Condenser Supply Outlet Pipe",
            "class": "Pipe:Adiabatic",
            "nodes": {
                "inlet": [
                    "Condenser Supply Exit Pipe Inlet Node",
                    "to_1383"
                ],
                "outlet": [
                    "Condenser Supply Outlet Node",
                    "from_1383"
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
            "id": 1325,
            "label": "Chilled Water Loop",
            "class": "PlantLoop",
            "nodes": {
                "inlet": [
                    "CW Demand Inlet Node",
                    "CW Supply Inlet Node",
                    "to_1325"
                ],
                "outlet": [
                    "CW Demand Outlet Node",
                    "CW Supply Outlet Node",
                    "from_1325"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1352,
            "label": "CW Loop Operation",
            "class": "PlantEquipmentOperationSchemes",
            "nodes": {
                "inlet": [
                    "to_1352"
                ],
                "outlet": [
                    "from_1352"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1326,
            "label": "Cooling Supply Side Branches",
            "class": "BranchList",
            "nodes": {
                "inlet": [
                    "to_1326"
                ],
                "outlet": [
                    "from_1326"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1331,
            "label": "Cooling Supply Side Connectors",
            "class": "ConnectorList",
            "nodes": {
                "inlet": [
                    "to_1331"
                ],
                "outlet": [
                    "from_1331"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1334,
            "label": "Cooling Demand Side Branches",
            "class": "BranchList",
            "nodes": {
                "inlet": [
                    "to_1334"
                ],
                "outlet": [
                    "from_1334"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1339,
            "label": "Cooling Demand Side Connectors",
            "class": "ConnectorList",
            "nodes": {
                "inlet": [
                    "to_1339"
                ],
                "outlet": [
                    "from_1339"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1327,
            "label": "CW Supply Pump Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "CW Supply Inlet Node",
                    "to_1327"
                ],
                "outlet": [
                    "CW Pump Outlet Node",
                    "from_1327"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1330,
            "label": "CW Supply Outlet Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "CW Supply Side Exit Pipe Inlet Node",
                    "to_1330"
                ],
                "outlet": [
                    "CW Supply Outlet Node",
                    "from_1330"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1335,
            "label": "CW Demand Inlet Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "CW Demand Inlet Node",
                    "to_1335"
                ],
                "outlet": [
                    "CW Demand Entrance Pipe Outlet Node",
                    "from_1335"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1338,
            "label": "CW Demand Outlet Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "CW Demand Exit Pipe Inlet Node",
                    "to_1338"
                ],
                "outlet": [
                    "CW Demand Outlet Node",
                    "from_1338"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1343,
            "label": "Chilled Water Loop Setpoint Manager",
            "class": "SetpointManager:Scheduled",
            "nodes": {
                "inlet": [
                    "to_1343"
                ],
                "outlet": [
                    "CW Supply Outlet Node",
                    "from_1343"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1357,
            "label": "CW Loop Temp Schedule",
            "class": "Schedule:Compact",
            "nodes": {
                "inlet": [
                    "to_1357"
                ],
                "outlet": [
                    "from_1357"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1350,
            "label": "Load Profile Load Schedule",
            "class": "Schedule:Compact",
            "nodes": {
                "inlet": [
                    "to_1350"
                ],
                "outlet": [
                    "from_1350"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1355,
            "label": "CW Loop Any Number",
            "class": "ScheduleTypeLimits",
            "nodes": {
                "inlet": [
                    "to_1355"
                ],
                "outlet": [
                    "from_1355"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1359,
            "label": "Load Profile Flow Frac Schedule",
            "class": "Schedule:Compact",
            "nodes": {
                "inlet": [
                    "to_1359"
                ],
                "outlet": [
                    "from_1359"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1353,
            "label": "CW Loop Cooling Load",
            "class": "PlantEquipmentOperation:CoolingLoad",
            "nodes": {
                "inlet": [
                    "to_1353"
                ],
                "outlet": [
                    "from_1353"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1358,
            "label": "Chiller AlwaysOnSchedule",
            "class": "Schedule:Compact",
            "nodes": {
                "inlet": [
                    "to_1358"
                ],
                "outlet": [
                    "from_1358"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1354,
            "label": "Chiller Plant",
            "class": "PlantEquipmentList",
            "nodes": {
                "inlet": [
                    "to_1354"
                ],
                "outlet": [
                    "from_1354"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1356,
            "label": "CW Loop On/Off",
            "class": "ScheduleTypeLimits",
            "nodes": {
                "inlet": [
                    "to_1356"
                ],
                "outlet": [
                    "from_1356"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1360,
            "label": "Condenser Loop",
            "class": "PlantLoop",
            "nodes": {
                "inlet": [
                    "Condenser Demand Inlet Node",
                    "Condenser Supply Inlet Node",
                    "to_1360"
                ],
                "outlet": [
                    "Condenser Demand Outlet Node",
                    "Condenser Supply Outlet Node",
                    "from_1360"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1387,
            "label": "Tower Loop Operation",
            "class": "PlantEquipmentOperationSchemes",
            "nodes": {
                "inlet": [
                    "to_1387"
                ],
                "outlet": [
                    "from_1387"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1361,
            "label": "Condenser Supply Side Branches",
            "class": "BranchList",
            "nodes": {
                "inlet": [
                    "to_1361"
                ],
                "outlet": [
                    "from_1361"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1366,
            "label": "Condenser Supply Side Connectors",
            "class": "ConnectorList",
            "nodes": {
                "inlet": [
                    "to_1366"
                ],
                "outlet": [
                    "from_1366"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1369,
            "label": "Condenser Demand Side Branches",
            "class": "BranchList",
            "nodes": {
                "inlet": [
                    "to_1369"
                ],
                "outlet": [
                    "from_1369"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1374,
            "label": "Condenser Demand Side Connectors",
            "class": "ConnectorList",
            "nodes": {
                "inlet": [
                    "to_1374"
                ],
                "outlet": [
                    "from_1374"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1362,
            "label": "Condenser Supply Pump Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "Condenser Supply Inlet Node",
                    "to_1362"
                ],
                "outlet": [
                    "Condenser Pump Outlet Node",
                    "from_1362"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1365,
            "label": "Condenser Supply Outlet Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "Condenser Supply Exit Pipe Inlet Node",
                    "to_1365"
                ],
                "outlet": [
                    "Condenser Supply Outlet Node",
                    "from_1365"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1370,
            "label": "Condenser Demand Inlet Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "Condenser Demand Inlet Node",
                    "to_1370"
                ],
                "outlet": [
                    "Condenser Demand Entrance Pipe Outlet Node",
                    "from_1370"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1373,
            "label": "Condenser Demand Outlet Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "Condenser Demand Exit Pipe Inlet Node",
                    "to_1373"
                ],
                "outlet": [
                    "Condenser Demand Outlet Node",
                    "from_1373"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1379,
            "label": "YorkCalc Default Tower Model",
            "class": "CoolingTowerPerformance:YorkCalc",
            "nodes": {
                "inlet": [
                    "to_1379"
                ],
                "outlet": [
                    "from_1379"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1378,
            "label": "CoolingTowerFanRatioCurve",
            "class": "Curve:Cubic",
            "nodes": {
                "inlet": [
                    "to_1378"
                ],
                "outlet": [
                    "from_1378"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1388,
            "label": "Tower Load",
            "class": "PlantEquipmentOperation:CoolingLoad",
            "nodes": {
                "inlet": [
                    "to_1388"
                ],
                "outlet": [
                    "from_1388"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1391,
            "label": "Tower AlwaysOnSchedule",
            "class": "Schedule:Compact",
            "nodes": {
                "inlet": [
                    "to_1391"
                ],
                "outlet": [
                    "from_1391"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1389,
            "label": "Tower Plant",
            "class": "PlantEquipmentList",
            "nodes": {
                "inlet": [
                    "to_1389"
                ],
                "outlet": [
                    "from_1389"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1390,
            "label": "Tower On/Off",
            "class": "ScheduleTypeLimits",
            "nodes": {
                "inlet": [
                    "to_1390"
                ],
                "outlet": [
                    "from_1390"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": 1392,
            "label": "Condenser Loop",
            "class": "Sizing:Plant",
            "nodes": {
                "inlet": [
                    "to_1392"
                ],
                "outlet": [
                    "from_1392"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": "1328",
            "label": "CW Supply Chiller Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "Chiller Inlet Node",
                    "to_1328"
                ],
                "outlet": [
                    "Chiller Outlet Node",
                    "from_1328"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": "1329",
            "label": "CW Supply Bypass Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "CW Supply Bypass Inlet Node",
                    "to_1329"
                ],
                "outlet": [
                    "CW Supply Bypass Outlet Node",
                    "from_1329"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": "1336",
            "label": "CW Demand Load Profile Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "Cooling Demand Load Profile Inlet Node",
                    "to_1336"
                ],
                "outlet": [
                    "Cooling Demand Load Profile Outlet Node",
                    "from_1336"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": "1337",
            "label": "CW Demand Bypass Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "CW Demand Bypass Inlet Node",
                    "to_1337"
                ],
                "outlet": [
                    "CW Demand Bypass Outlet Node",
                    "from_1337"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": "1363",
            "label": "Condenser Supply Tower Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "Condenser Tower Inlet Node",
                    "to_1363"
                ],
                "outlet": [
                    "Condenser Tower Outlet Node",
                    "from_1363"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": "1364",
            "label": "Condenser Supply Bypass Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "Cond Supply Bypass Inlet Node",
                    "to_1364"
                ],
                "outlet": [
                    "Cond Supply Bypass Outlet Node",
                    "from_1364"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": "1371",
            "label": "Condenser Demand Chiller Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "Chiller Condenser Inlet Node",
                    "to_1371"
                ],
                "outlet": [
                    "Chiller Condenser Outlet Node",
                    "from_1371"
                ]
            }
        }
    },
    {
        "group": "nodes",
        "data": {
            "id": "1372",
            "label": "Condenser Demand Bypass Branch",
            "class": "Branch",
            "nodes": {
                "inlet": [
                    "Cond Demand Bypass Inlet Node",
                    "to_1372"
                ],
                "outlet": [
                    "Cond Demand Bypass Outlet Node",
                    "from_1372"
                ]
            }
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-1",
            "source": 1344,
            "target": 1332,
            "from_node": "CW Pump Outlet Node",
            "to_node": "inlet_node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-2",
            "source": 1332,
            "target": 1342,
            "from_node": "outlet_node1",
            "to_node": "Chiller Inlet Node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-3",
            "source": 1332,
            "target": 1345,
            "from_node": "outlet_node2",
            "to_node": "CW Supply Bypass Inlet Node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-4",
            "source": 1342,
            "target": 1333,
            "from_node": "Chiller Outlet Node",
            "to_node": "inlet_node1"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-5",
            "source": 1345,
            "target": 1333,
            "from_node": "CW Supply Bypass Outlet Node",
            "to_node": "inlet_node2"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-6",
            "source": 1333,
            "target": 1346,
            "from_node": "outlet_node",
            "to_node": "CW Supply Side Exit Pipe Inlet Node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-7",
            "source": 1347,
            "target": 1340,
            "from_node": "CW Demand Entrance Pipe Outlet Node",
            "to_node": "inlet_node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-8",
            "source": 1340,
            "target": 1351,
            "from_node": "outlet_node1",
            "to_node": "Cooling Demand Load Profile Inlet Node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-9",
            "source": 1340,
            "target": 1348,
            "from_node": "outlet_node2",
            "to_node": "CW Demand Bypass Inlet Node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-10",
            "source": 1351,
            "target": 1341,
            "from_node": "Cooling Demand Load Profile Outlet Node",
            "to_node": "inlet_node1"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-11",
            "source": 1348,
            "target": 1341,
            "from_node": "CW Demand Bypass Outlet Node",
            "to_node": "inlet_node2"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-12",
            "source": 1341,
            "target": 1349,
            "from_node": "outlet_node",
            "to_node": "CW Demand Exit Pipe Inlet Node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-13",
            "source": 1384,
            "target": 1375,
            "from_node": "Condenser Demand Entrance Pipe Outlet Node",
            "to_node": "inlet_node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-14",
            "source": 1375,
            "target": 1342,
            "from_node": "outlet_node1",
            "to_node": "Chiller Condenser Inlet Node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-15",
            "source": 1375,
            "target": 1385,
            "from_node": "outlet_node2",
            "to_node": "Cond Demand Bypass Inlet Node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-16",
            "source": 1342,
            "target": 1376,
            "from_node": "Chiller Condenser Outlet Node",
            "to_node": "inlet_node1"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-17",
            "source": 1385,
            "target": 1376,
            "from_node": "Cond Demand Bypass Outlet Node",
            "to_node": "inlet_node2"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-18",
            "source": 1376,
            "target": 1386,
            "from_node": "outlet_node",
            "to_node": "Condenser Demand Exit Pipe Inlet Node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-19",
            "source": 1381,
            "target": 1367,
            "from_node": "Condenser Pump Outlet Node",
            "to_node": "inlet_node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-20",
            "source": 1367,
            "target": 1377,
            "from_node": "outlet_node1",
            "to_node": "Condenser Tower Inlet Node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-21",
            "source": 1367,
            "target": 1382,
            "from_node": "outlet_node2",
            "to_node": "Cond Supply Bypass Inlet Node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-22",
            "source": 1377,
            "target": 1368,
            "from_node": "Condenser Tower Outlet Node",
            "to_node": "inlet_node1"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-23",
            "source": 1382,
            "target": 1368,
            "from_node": "Cond Supply Bypass Outlet Node",
            "to_node": "inlet_node2"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "edge-24",
            "source": 1368,
            "target": 1383,
            "from_node": "outlet_node",
            "to_node": "Condenser Supply Exit Pipe Inlet Node"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-25",
            "source": 1325,
            "target": 1352,
            "from_node": "from_1325",
            "to_node": "to_1352"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-26",
            "source": 1325,
            "target": 1326,
            "from_node": "from_1325",
            "to_node": "to_1326"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-27",
            "source": 1325,
            "target": 1331,
            "from_node": "from_1325",
            "to_node": "to_1331"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-28",
            "source": 1325,
            "target": 1334,
            "from_node": "from_1325",
            "to_node": "to_1334"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-29",
            "source": 1325,
            "target": 1339,
            "from_node": "from_1325",
            "to_node": "to_1339"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-30",
            "source": 1331,
            "target": 1332,
            "from_node": "from_1331",
            "to_node": "to_1332"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-31",
            "source": 1331,
            "target": 1333,
            "from_node": "from_1331",
            "to_node": "to_1333"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-32",
            "source": 1332,
            "target": 1327,
            "from_node": "from_1332",
            "to_node": "to_1327"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-33",
            "source": 1333,
            "target": 1330,
            "from_node": "from_1333",
            "to_node": "to_1330"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-34",
            "source": 1339,
            "target": 1340,
            "from_node": "from_1339",
            "to_node": "to_1340"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-35",
            "source": 1339,
            "target": 1341,
            "from_node": "from_1339",
            "to_node": "to_1341"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-36",
            "source": 1340,
            "target": 1335,
            "from_node": "from_1340",
            "to_node": "to_1335"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-37",
            "source": 1341,
            "target": 1338,
            "from_node": "from_1341",
            "to_node": "to_1338"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-38",
            "source": 1343,
            "target": 1357,
            "from_node": "from_1343",
            "to_node": "to_1357"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-39",
            "source": 1350,
            "target": 1355,
            "from_node": "from_1350",
            "to_node": "to_1355"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-40",
            "source": 1351,
            "target": 1350,
            "from_node": "from_1351",
            "to_node": "to_1350"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-41",
            "source": 1351,
            "target": 1359,
            "from_node": "from_1351",
            "to_node": "to_1359"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-42",
            "source": 1352,
            "target": 1353,
            "from_node": "from_1352",
            "to_node": "to_1353"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-43",
            "source": 1352,
            "target": 1358,
            "from_node": "from_1352",
            "to_node": "to_1358"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-44",
            "source": 1353,
            "target": 1354,
            "from_node": "from_1353",
            "to_node": "to_1354"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-45",
            "source": 1357,
            "target": 1355,
            "from_node": "from_1357",
            "to_node": "to_1355"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-46",
            "source": 1358,
            "target": 1356,
            "from_node": "from_1358",
            "to_node": "to_1356"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-47",
            "source": 1359,
            "target": 1355,
            "from_node": "from_1359",
            "to_node": "to_1355"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-48",
            "source": 1360,
            "target": 1387,
            "from_node": "from_1360",
            "to_node": "to_1387"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-49",
            "source": 1360,
            "target": 1361,
            "from_node": "from_1360",
            "to_node": "to_1361"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-50",
            "source": 1360,
            "target": 1366,
            "from_node": "from_1360",
            "to_node": "to_1366"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-51",
            "source": 1360,
            "target": 1369,
            "from_node": "from_1360",
            "to_node": "to_1369"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-52",
            "source": 1360,
            "target": 1374,
            "from_node": "from_1360",
            "to_node": "to_1374"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-53",
            "source": 1366,
            "target": 1367,
            "from_node": "from_1366",
            "to_node": "to_1367"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-54",
            "source": 1366,
            "target": 1368,
            "from_node": "from_1366",
            "to_node": "to_1368"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-55",
            "source": 1367,
            "target": 1362,
            "from_node": "from_1367",
            "to_node": "to_1362"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-56",
            "source": 1368,
            "target": 1365,
            "from_node": "from_1368",
            "to_node": "to_1365"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-57",
            "source": 1374,
            "target": 1375,
            "from_node": "from_1374",
            "to_node": "to_1375"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-58",
            "source": 1374,
            "target": 1376,
            "from_node": "from_1374",
            "to_node": "to_1376"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-59",
            "source": 1375,
            "target": 1370,
            "from_node": "from_1375",
            "to_node": "to_1370"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-60",
            "source": 1376,
            "target": 1373,
            "from_node": "from_1376",
            "to_node": "to_1373"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-61",
            "source": 1377,
            "target": 1379,
            "from_node": "from_1377",
            "to_node": "to_1379"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-62",
            "source": 1377,
            "target": 1378,
            "from_node": "from_1377",
            "to_node": "to_1378"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-63",
            "source": 1387,
            "target": 1388,
            "from_node": "from_1387",
            "to_node": "to_1388"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-64",
            "source": 1387,
            "target": 1391,
            "from_node": "from_1387",
            "to_node": "to_1391"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-65",
            "source": 1388,
            "target": 1389,
            "from_node": "from_1388",
            "to_node": "to_1389"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-66",
            "source": 1391,
            "target": 1390,
            "from_node": "from_1391",
            "to_node": "to_1390"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-67",
            "source": 1392,
            "target": 1360,
            "from_node": "from_1392",
            "to_node": "to_1360"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-68",
            "source": 1326,
            "target": 1327,
            "from_node": "from_1326",
            "to_node": "to_1327"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-69",
            "source": 1326,
            "target": "1328",
            "from_node": "from_1326",
            "to_node": "to_1328"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-70",
            "source": 1326,
            "target": "1329",
            "from_node": "from_1326",
            "to_node": "to_1329"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-71",
            "source": 1326,
            "target": 1330,
            "from_node": "from_1326",
            "to_node": "to_1330"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-72",
            "source": 1327,
            "target": 1344,
            "from_node": "from_1327",
            "to_node": "to_1344"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-73",
            "source": "1328",
            "target": 1342,
            "from_node": "from_1328",
            "to_node": "to_1342"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-74",
            "source": "1329",
            "target": 1345,
            "from_node": "from_1329",
            "to_node": "to_1345"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-75",
            "source": 1330,
            "target": 1346,
            "from_node": "from_1330",
            "to_node": "to_1346"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-76",
            "source": 1332,
            "target": "1328",
            "from_node": "from_1332",
            "to_node": "to_1328"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-77",
            "source": 1332,
            "target": "1329",
            "from_node": "from_1332",
            "to_node": "to_1329"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-78",
            "source": 1333,
            "target": "1328",
            "from_node": "from_1333",
            "to_node": "to_1328"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-79",
            "source": 1333,
            "target": "1329",
            "from_node": "from_1333",
            "to_node": "to_1329"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-80",
            "source": 1334,
            "target": 1335,
            "from_node": "from_1334",
            "to_node": "to_1335"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-81",
            "source": 1334,
            "target": "1336",
            "from_node": "from_1334",
            "to_node": "to_1336"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-82",
            "source": 1334,
            "target": "1337",
            "from_node": "from_1334",
            "to_node": "to_1337"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-83",
            "source": 1334,
            "target": 1338,
            "from_node": "from_1334",
            "to_node": "to_1338"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-84",
            "source": 1335,
            "target": 1347,
            "from_node": "from_1335",
            "to_node": "to_1347"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-85",
            "source": "1336",
            "target": 1351,
            "from_node": "from_1336",
            "to_node": "to_1351"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-86",
            "source": "1337",
            "target": 1348,
            "from_node": "from_1337",
            "to_node": "to_1348"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-87",
            "source": 1338,
            "target": 1349,
            "from_node": "from_1338",
            "to_node": "to_1349"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-88",
            "source": 1340,
            "target": "1336",
            "from_node": "from_1340",
            "to_node": "to_1336"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-89",
            "source": 1340,
            "target": "1337",
            "from_node": "from_1340",
            "to_node": "to_1337"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-90",
            "source": 1341,
            "target": "1336",
            "from_node": "from_1341",
            "to_node": "to_1336"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-91",
            "source": 1341,
            "target": "1337",
            "from_node": "from_1341",
            "to_node": "to_1337"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-92",
            "source": 1354,
            "target": 1342,
            "from_node": "from_1354",
            "to_node": "to_1342"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-93",
            "source": 1361,
            "target": 1362,
            "from_node": "from_1361",
            "to_node": "to_1362"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-94",
            "source": 1361,
            "target": "1363",
            "from_node": "from_1361",
            "to_node": "to_1363"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-95",
            "source": 1361,
            "target": "1364",
            "from_node": "from_1361",
            "to_node": "to_1364"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-96",
            "source": 1361,
            "target": 1365,
            "from_node": "from_1361",
            "to_node": "to_1365"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-97",
            "source": 1362,
            "target": 1381,
            "from_node": "from_1362",
            "to_node": "to_1381"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-98",
            "source": "1363",
            "target": 1377,
            "from_node": "from_1363",
            "to_node": "to_1377"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-99",
            "source": "1364",
            "target": 1382,
            "from_node": "from_1364",
            "to_node": "to_1382"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-100",
            "source": 1365,
            "target": 1383,
            "from_node": "from_1365",
            "to_node": "to_1383"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-101",
            "source": 1367,
            "target": "1363",
            "from_node": "from_1367",
            "to_node": "to_1363"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-102",
            "source": 1367,
            "target": "1364",
            "from_node": "from_1367",
            "to_node": "to_1364"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-103",
            "source": 1368,
            "target": "1363",
            "from_node": "from_1368",
            "to_node": "to_1363"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-104",
            "source": 1368,
            "target": "1364",
            "from_node": "from_1368",
            "to_node": "to_1364"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-105",
            "source": 1369,
            "target": 1370,
            "from_node": "from_1369",
            "to_node": "to_1370"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-106",
            "source": 1369,
            "target": "1371",
            "from_node": "from_1369",
            "to_node": "to_1371"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-107",
            "source": 1369,
            "target": "1372",
            "from_node": "from_1369",
            "to_node": "to_1372"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-108",
            "source": 1369,
            "target": 1373,
            "from_node": "from_1369",
            "to_node": "to_1373"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-109",
            "source": 1370,
            "target": 1384,
            "from_node": "from_1370",
            "to_node": "to_1384"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-110",
            "source": "1371",
            "target": 1342,
            "from_node": "from_1371",
            "to_node": "to_1342"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-111",
            "source": "1372",
            "target": 1385,
            "from_node": "from_1372",
            "to_node": "to_1385"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-112",
            "source": 1373,
            "target": 1386,
            "from_node": "from_1373",
            "to_node": "to_1386"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-113",
            "source": 1375,
            "target": "1371",
            "from_node": "from_1375",
            "to_node": "to_1371"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-114",
            "source": 1375,
            "target": "1372",
            "from_node": "from_1375",
            "to_node": "to_1372"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-115",
            "source": 1376,
            "target": "1371",
            "from_node": "from_1376",
            "to_node": "to_1371"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-116",
            "source": 1376,
            "target": "1372",
            "from_node": "from_1376",
            "to_node": "to_1372"
        }
    },
    {
        "group": "edges",
        "data": {
            "id": "e-117",
            "source": 1389,
            "target": 1377,
            "from_node": "from_1389",
            "to_node": "to_1377"
        }
    }
]