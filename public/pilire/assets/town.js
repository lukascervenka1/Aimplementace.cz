/* Izometrické low-poly městečko Pilíře, generováno procedurálně. Logika přenesená 1:1 z návrhu (IsoTown.dc.html). */
(function () {
  'use strict';

  var SVGNS = 'http://www.w3.org/2000/svg';

  function buildTown() {
    var TW = 52, TH = 26, OX = 450, OY = 235;
    var iso = function (gx, gy, gz) {
      gz = gz || 0;
      return [OX + (gx - gy) * TW, OY + (gx + gy) * TH - gz];
    };
    var P = function (pts) {
      return pts.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
    };
    var lerp = function (a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]; };

    // ---------- Island ----------
    var E = 3.2, D = 80;
    var gTop = iso(-E, -E), gRight = iso(E, -E), gBot = iso(E, E), gLeft = iso(-E, E);
    var islandPolys = [
      { points: P([gLeft, gBot, [gBot[0], gBot[1] + D], [gLeft[0], gLeft[1] + D]]), fill: '#6E5544' },
      { points: P([gBot, gRight, [gRight[0], gRight[1] + D], [gBot[0], gBot[1] + D]]), fill: '#856B57' },
      // dirt bottom bevel
      { points: P([[gLeft[0], gLeft[1] + D], [gBot[0], gBot[1] + D], [gRight[0], gRight[1] + D], [gRight[0], gRight[1] + D + 10], [gBot[0], gBot[1] + D + 16], [gLeft[0], gLeft[1] + D + 10]]), fill: '#5E4839' },
      // grass top
      { points: P([gTop, gRight, gBot, gLeft]), fill: '#8CB86B' },
      // grass patches
      { points: P([iso(-1.4, -1.2), iso(-0.2, -1.2), iso(-0.2, 0), iso(-1.4, 0)]), fill: '#9EC776' },
      { points: P([iso(1.2, 1.4), iso(2.4, 1.4), iso(2.4, 2.6), iso(1.2, 2.6)]), fill: '#7AA861' },
      { points: P([iso(0.4, -0.6), iso(1.2, -0.6), iso(1.2, 0.2), iso(0.4, 0.2)]), fill: '#9EC776' }
    ];
    // roads (light cobbled paths)
    var road = function (a, b, w) {
      w = w || 9;
      var p1 = iso(a[0], a[1]), p2 = iso(b[0], b[1]);
      var dx = p2[0] - p1[0], dy = p2[1] - p1[1];
      var len = Math.hypot(dx, dy) || 1;
      var nx = (-dy / len) * w, ny = (dx / len) * w;
      return { points: P([[p1[0] + nx, p1[1] + ny], [p2[0] + nx, p2[1] + ny], [p2[0] - nx, p2[1] - ny], [p1[0] - nx, p1[1] - ny]]), fill: '#B89361' };
    };
    islandPolys.push(road([-1.9, -0.4], [-0.9, -0.4], 11));
    islandPolys.push(road([-0.9, -0.4], [0.4, 0.2], 11));
    islandPolys.push(road([0.4, 0.2], [1.9, 0.6], 11));
    islandPolys.push(road([0.4, 0.2], [0, 1.9], 11));
    islandPolys.push(road([-0.9, -0.4], [-1.9, 1.5], 11));

    // ---------- Buildings ----------
    var items = [];
    var RES = { wallR: '#EAD9B8', wallL: '#D6C098', roofR: '#C77D57', roofR2: '#D18C68', roofL: '#A9663F', roofL2: '#98572F' };
    var CIV = { wallR: '#E7E0CF', wallL: '#D0C6AF', roofR: '#5C7A99', roofR2: '#6E8CA9', roofL: '#47607A', roofL2: '#3C5069' };
    var bld = function (gx, gy, o) {
      var h = o.half, wh = o.wall, base = o.base || 0;
      var gt = iso(gx - h, gy - h, base), gr = iso(gx + h, gy - h, base), gb = iso(gx + h, gy + h, base), gl = iso(gx - h, gy + h, base);
      var up = function (p) { return [p[0], p[1] - wh]; };
      var tt = up(gt), tr = up(gr), tb = up(gb), tl = up(gl);
      var polys = [];
      polys.push({ points: P([tr, tb, gb, gr]), fill: o.wallR });
      polys.push({ points: P([tl, tb, gb, gl]), fill: o.wallL });
      if (o.flat) {
        polys.push({ points: P([tt, tr, tb, tl]), fill: o.top });
      } else {
        var rh = o.roof;
        var apex = [OX + (gx - gy) * TW, OY + (gx + gy) * TH - base - wh - rh];
        polys.push({ points: P([apex, tt, tr]), fill: o.roofR2 });
        polys.push({ points: P([apex, tr, tb]), fill: o.roofR });
        polys.push({ points: P([apex, tb, tl]), fill: o.roofL });
        polys.push({ points: P([apex, tl, tt]), fill: o.roofL2 });
      }
      // lit window on right wall + door on left wall
      if (o.win !== false) {
        var bl = function (u, v) { return lerp(lerp(tr, tb, u), lerp(gr, gb, u), v); };
        polys.push({ points: P([bl(0.42, 0.32), bl(0.72, 0.32), bl(0.72, 0.62), bl(0.42, 0.62)]), fill: '#F7D19E' });
        var dl = function (u, v) { return lerp(lerp(tl, tb, u), lerp(gl, gb, u), v); };
        polys.push({ points: P([dl(0.55, 0.5), dl(0.78, 0.5), dl(0.78, 1), dl(0.55, 1)]), fill: '#8C7355' });
      }
      items.push({ key: gx + gy + (base ? 0.01 : 0), polys: polys, circles: [] });
    };

    bld(-1.9, -0.4, Object.assign({}, RES, { half: 0.7, wall: 34, roof: 30 }));
    bld(0.4, -2.0, Object.assign({}, RES, { half: 0.68, wall: 30, roof: 28 }));
    bld(2.1, 0.5, Object.assign({}, CIV, { half: 0.9, wall: 48, roof: 36, win: false }));
    bld(-0.3, 2.0, Object.assign({}, RES, { half: 0.7, wall: 32, roof: 28 }));
    bld(2.0, -1.4, Object.assign({}, RES, { half: 0.66, wall: 30, roof: 26 }));
    bld(1.6, 1.9, Object.assign({}, CIV, { half: 0.6, wall: 30, roof: 26, win: false }));
    // tower (tall thin civic)
    bld(-1.9, 1.7, Object.assign({}, CIV, { half: 0.42, wall: 70, roof: 26, win: false }));

    // ---------- Brand pillar monument (center) ----------
    bld(0, 0, { half: 0.9, wall: 14, flat: true, wallR: '#E7B04A', wallL: '#CE982E', top: '#F4C860', win: false }); // gold pedestal
    bld(0, 0, { half: 0.58, wall: 12, base: 14, flat: true, wallR: '#F2E7CF', wallL: '#E0D2B4', top: '#F7F2E6', win: false }); // stone base
    bld(0, 0, { half: 0.3, wall: 118, base: 26, flat: true, wallR: '#F0E7D3', wallL: '#DCCFB2', top: '#F9F5EC', win: false }); // shaft
    bld(0, 0, { half: 0.42, wall: 14, base: 144, flat: true, wallR: '#EFE5CE', wallL: '#DDD0B3', top: '#FAF6ED', win: false }); // capital
    bld(0, 0, { half: 0.24, wall: 20, base: 158, flat: true, wallR: '#E7B04A', wallL: '#CE982E', top: '#F4C860', win: false }); // gold cube on top

    // ---------- Trees ----------
    var coneTree = function (gx, gy) {
      var c = iso(gx, gy);
      var polys = [
        { points: P([[c[0] - 5, c[1]], [c[0] + 5, c[1]], [c[0] + 5, c[1] - 12], [c[0] - 5, c[1] - 12]]), fill: '#7A5A3A' },
        { points: P([[c[0], c[1] - 60], [c[0] + 26, c[1] - 8], [c[0], c[1] - 4]]), fill: '#5E8F4E' },
        { points: P([[c[0], c[1] - 60], [c[0], c[1] - 4], [c[0] - 26, c[1] - 8]]), fill: '#4C7A40' }
      ];
      items.push({ key: gx + gy, polys: polys, circles: [] });
    };
    var roundTree = function (gx, gy) {
      var c = iso(gx, gy);
      items.push({
        key: gx + gy,
        polys: [{ points: P([[c[0] - 4, c[1]], [c[0] + 4, c[1]], [c[0] + 4, c[1] - 14], [c[0] - 4, c[1] - 14]]), fill: '#7A5A3A' }],
        circles: [
          { cx: c[0], cy: c[1] - 30, r: 20, fill: '#5E8F4E' },
          { cx: c[0] + 6, cy: c[1] - 36, r: 12, fill: '#7DB25E' }
        ]
      });
    };
    coneTree(-2.7, 0.7);
    coneTree(-0.9, -2.2);
    coneTree(2.8, -0.3);
    roundTree(0.7, 2.7);
    roundTree(-2.7, -1.3);

    // ---------- Pond ----------
    var pc = iso(1.2, 2.3);
    items.push({
      key: 1.2 + 2.3 - 0.5,
      polys: [
        { points: P([[pc[0], pc[1] - 14], [pc[0] + 30, pc[1]], [pc[0], pc[1] + 14], [pc[0] - 30, pc[1]]]), fill: '#8EC6E0' },
        { points: P([[pc[0], pc[1] - 8], [pc[0] + 18, pc[1]], [pc[0], pc[1] + 8], [pc[0] - 18, pc[1]]]), fill: '#C6E3F0' }
      ],
      circles: []
    });

    items.sort(function (a, b) { return a.key - b.key; });
    return { islandPolys: islandPolys, items: items };
  }

  function poly(points, fill) {
    var el = document.createElementNS(SVGNS, 'polygon');
    el.setAttribute('points', points);
    el.setAttribute('fill', fill);
    return el;
  }
  function circ(c) {
    var el = document.createElementNS(SVGNS, 'circle');
    el.setAttribute('cx', c.cx);
    el.setAttribute('cy', c.cy);
    el.setAttribute('r', c.r);
    el.setAttribute('fill', c.fill);
    return el;
  }

  function render() {
    var islandG = document.getElementById('town-island');
    var itemsG = document.getElementById('town-items');
    if (!islandG || !itemsG) return;

    var data = buildTown();
    var frag1 = document.createDocumentFragment();
    data.islandPolys.forEach(function (p) { frag1.appendChild(poly(p.points, p.fill)); });
    islandG.appendChild(frag1);

    var frag2 = document.createDocumentFragment();
    data.items.forEach(function (it) {
      var g = document.createElementNS(SVGNS, 'g');
      it.polys.forEach(function (p) { g.appendChild(poly(p.points, p.fill)); });
      it.circles.forEach(function (c) { g.appendChild(circ(c)); });
      frag2.appendChild(g);
    });
    itemsG.appendChild(frag2);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
