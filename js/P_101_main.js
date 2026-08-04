(this.webpackJsonpapp = this.webpackJsonpapp || []).push([
  [0],
  {
    219: function (e, t, r) {},
    238: function (e, t) {},
    240: function (e, t) {},
    266: function (e, t) {},
    282: function (e, t, r) {},
    283: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        c = r(59),
        a = r.n(c),
        o = (r(219), r(21)),
        s = r(193),
        i = r.n(s),
        u = r(194),
        d = r.n(u);
      function l(e, t) {
        (t || (t = window.location.href), (e = e.replace(/[\[\]]/g, "\\$&")));
        var r = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
        return r
          ? r[2]
            ? decodeURIComponent(r[2].replace(/\+/g, " "))
            : ""
          : null;
      }
      !(function (e) {
        e = e.split("+").join(" ");
        for (var t, r = {}, n = /[?&]?([^=]+)=([^&]*)/g; (t = n.exec(e));)
          r[decodeURIComponent(t[1])] = decodeURIComponent(t[2]);
      })(document.location.search);
      var b = "localhost:3000" === window.location.host,
        f = {
          appSetting: {
            appToken: "cehugsncek2qbmbw328wqbgpxsi6",
            userToken: "b4y4hv_mjse_0_ch5dc5ibstq2fkbmgd4ht8vaubn",
            realm: "usap",
          },
        },
        p = {
          proxy: b ? "cors.mcfazure.com" : "",
          realm: f.appSetting.realm,
          appToken: f.appSetting.appToken,
          userToken: b ? f.appSetting.userToken : null,
          useSSL: !0,
          port: "",
          connectionLimit: 50,
        },
        j = b ? new d.a(p) : new i.a(p);
      Object.assign(f, {
        tbQAAudit: { dbid: "bveushj8d" },
        datatableField: {
          RecordID: 0,
          Name: 1,
          Region: 2,
          Role: 3,
          PrimaryRole: 4,
          Company: 5,
          LastAudit: 6,
          AuditType: 7,
          LastAuditMonth: 8,
          DeactivationDate: 9,
          Create: 10,
        },
        tbResources: {
          dbid: "bveushyvx",
          fields: {
            RecordID: 3,
            EligibleForAudit: 64,
            MaximumRelatedQAAuditCompleted: 102,
            ResourceAuditType: 68,
            ActiveEmployee: 32,
            PrimaryRole: 20,
            RoleCategory: 24,
            ResourceName: 15,
            SoftAuditStatus: 35,
            Region: 27,
            USAPEmployee: 18,
            LastAuditCompletedOn: 58,
            LastCompletedAuditMonth: 62,
            Eligible: 81,
            RelatedCompany: 21,
            DeactivationDate: 34,
          },
        },
        tbAuditTypes: {
          dbid: "bveusicp4",
          fields: { RecordID: 3, Name: 6, RandomTasks: 7 },
        },
        tbResourceAudits: {
          dbid: "bveushj8i",
          clist: "6.10.15.70.93",
          focusedAuditClist: "6.10.15.70.235",
          clist_output: "3.69.14.10.15",
          fields: {
            RecordID: 3,
            RelatedQAAudit: 6,
            RelatedResource: 10,
            AuditType: 15,
            AuditStartDate: 69,
            AuditEndDate: 14,
            AssignedTo: 70,
            RelatedFocusAudit: 235,
            PrepForBulkAudit: 93,
          },
          groupAuditResource: 1273,
        },
        tbEncounters: {
          dbid: "bveushywk",
          clist: "3.80.81.78",
          fields: {
            RecordID: 3,
            CompletedDate: 113,
            RelatedResourceAudit: 80,
            UserID: 108,
            ReadyToProcess: 81,
            FormTask: 112,
            FormDate: 113,
            UniqueIdentifier: 218,
            FormSource: 109,
            RelatedResourceID: 182,
            RelatedIdRelatedResources: 222,
          },
        },
        tbResourceID: {
          dbid: "bveusicqw",
          fields: { RecordID: 3, UserID: 6, RelatedResource: 8 },
        },
        tbAuditTask: {
          dbid: "bveushkan",
          clist: "3.159.158",
          fields: {
            RecordID: 3,
            TaskScore: 20,
            MaxTaskScore: 11,
            AuditofTaskCompleted: 21,
            AuditofTaskCompleteDate: 157,
            Auditorselected: 156,
            MarkReadyToProcess: 158,
            RelatedResourceAudit: 159,
          },
        },
        resourceTask: {
          dbid: "bveushywk",
          clist: "3.80.81.78",
          fields: { UserID: 108, RelatedResourceAudit: 80, ReadyToProcess: 81 },
        },
        auditTask: {
          dbid: "bveushkan",
          clist: "3.159.158",
          fields: {
            UserID: 329,
            RelatedResourceAudit: 159,
            ReadyToProcess: 158,
          },
        },
        errors: {
          dbid: "bveushnhn",
          clist: "3.224.223",
          fields: {
            UserID: 242,
            RelatedResourceAudit: 224,
            ReadyToProcess: 223,
          },
        },
        rebuttals: {
          dbid: "bveush6jt",
          clist: "3.184.183",
          fields: {
            UserID: 211,
            RelatedResourceAudit: 184,
            ReadyToProcess: 183,
          },
        },
      });
      var h = Object(o.a)({}, f),
        O = r(300),
        m = r(298),
        x = r(302),
        R = r(10),
        v = r(19);
      function A(e, t) {
        return new Promise(
          (function () {
            var r = Object(v.a)(
              Object(R.a)().mark(function r(n, c) {
                return Object(R.a)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.next = 2),
                          j.api(
                            "API_DoQuery",
                            { dbid: e, qid: t },
                            function (e, t) {
                              (e && c(e), n(t ? t.table.records : []));
                            },
                          )
                        );
                      case 2:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            );
            return function (e, t) {
              return r.apply(this, arguments);
            };
          })(),
        );
      }
      function g(e, t, r, n, c) {
        return new Promise(
          (function () {
            var a = Object(v.a)(
              Object(R.a)().mark(function a(o, s) {
                return Object(R.a)().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (a.next = 2),
                          j.api(
                            "API_DoQuery",
                            {
                              dbid: e,
                              clist: t,
                              query: r,
                              options: c,
                              slist: n,
                            },
                            function (e, t) {
                              (e && s(e), o(t ? t.table.records : []));
                            },
                          )
                        );
                      case 2:
                      case "end":
                        return a.stop();
                    }
                }, a);
              }),
            );
            return function (e, t) {
              return a.apply(this, arguments);
            };
          })(),
        );
      }
      function y(e, t, r) {
        return new Promise(function (n, c) {
          j.api("API_ImportFromCSV", {
            dbid: e,
            records_csv: t,
            clist: r,
            skipfirst: !1,
            msInUTC: !0,
          })
            .then(function (e) {
              if (0 == e.errcode) return n(e);
              var t =
                "QB Error Code: " + e.errcode + ", Error Message: " + e.errtext;
              return c(t);
            })
            .then(function (e) {})
            .catch(function (t) {
              var r = "QB Table: " + e + ", Error Message: " + t.message;
              c(r);
            });
        });
      }
      var k = r(299),
        D = "pageType",
        T = "filter",
        C = "loading",
        w = "auditTypes",
        I = "itemInfo",
        E = "default",
        S = "focused",
        N = {
          pageType: E,
          filter: "monthly",
          loading: !1,
          auditTypes: null,
          itemInfo: [],
        };
      function F(e, t) {
        switch (t.type) {
          case D:
            return Object(o.a)(Object(o.a)({}, e), {}, { pageType: t.payload });
          case T:
            return Object(o.a)(Object(o.a)({}, e), {}, { filter: t.payload });
          case C:
            return Object(o.a)(Object(o.a)({}, e), {}, { loading: t.payload });
          case w:
            return Object(o.a)(
              Object(o.a)({}, e),
              {},
              { auditTypes: t.payload },
            );
          case I:
            return Object(o.a)(Object(o.a)({}, e), {}, { itemInfo: t.payload });
          default:
            throw Error("Unknown action: " + t.type);
        }
      }
      var P = r(32),
        U = r(2),
        X = Object(n.createContext)(void 0),
        M = Object(n.createContext)(void 0),
        L = function (e, t) {
          return { type: e, payload: t };
        };
      function _(e) {
        var t = e.children,
          r = Object(n.useReducer)(F, N),
          c = Object(P.a)(r, 2),
          a = c[0],
          o = c[1];
        return Object(U.jsx)(X.Provider, {
          value: a,
          children: Object(U.jsx)(M.Provider, { value: o, children: t }),
        });
      }
      var z = function () {
          var e = Object(n.useContext)(M),
            t = Object(n.useContext)(X).filter,
            r = function (t, r) {
              var n = r.value;
              (e(n === S ? { type: D, payload: S } : { type: D, payload: E }),
                e({ type: T, payload: n }));
            };
          return Object(U.jsx)(x.a.Row, {
            children: Object(U.jsx)(x.a.Column, {
              mobile: 16,
              tablet: 16,
              computer: 16,
              children: Object(U.jsx)(k.a, {
                children: Object(U.jsxs)(k.a.Group, {
                  inline: !0,
                  children: [
                    Object(U.jsx)(k.a.Radio, {
                      label: "Monthly",
                      value: "monthly",
                      checked: "monthly" === t,
                      onChange: r,
                    }),
                    Object(U.jsx)(k.a.Radio, {
                      label: "Soft",
                      value: "soft",
                      checked: "soft" === t,
                      onChange: r,
                    }),
                    Object(U.jsx)(k.a.Radio, {
                      label: "Auditor",
                      value: "auditor",
                      checked: "auditor" === t,
                      onChange: r,
                    }),
                    Object(U.jsx)(k.a.Radio, {
                      label: "Focused",
                      value: S,
                      checked: t === S,
                      onChange: r,
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        Q = r(29),
        q = r.n(Q),
        H = (r(281), r(284)),
        B = r(116),
        G = l("auditid"),
        Y = h.tbResources.fields,
        $ = Object.values(Y).join("."),
        J = {
          dbid: h.tbResources.dbid,
          clist: $,
          soft: "{"
            .concat(Y.EligibleForAudit, ".EX.true}AND{")
            .concat(Y.ResourceAuditType, ".EX.Soft}AND({")
            .concat(Y.MaximumRelatedQAAuditCompleted, ".LTE.")
            .concat(G, "}AND{")
            .concat(Y.SoftAuditStatus, '.EX."Yes"})'),
          auditor: "{"
            .concat(Y.EligibleForAudit, ".EX.true}AND{")
            .concat(Y.ActiveEmployee, ".EX.true}AND{")
            .concat(Y.PrimaryRole, ".EX.Auditor}AND({")
            .concat(Y.MaximumRelatedQAAuditCompleted, ".LT.")
            .concat(G, "}AND({")
            .concat(Y.SoftAuditStatus, '.EX."No"}OR{')
            .concat(Y.SoftAuditStatus, '.EX.""}))'),
          monthly: "{"
            .concat(Y.EligibleForAudit, ".EX.true}AND{")
            .concat(Y.MaximumRelatedQAAuditCompleted, ".LT.")
            .concat(G, "}AND({")
            .concat(Y.SoftAuditStatus, '.EX."No"}OR{')
            .concat(Y.SoftAuditStatus, '.EX.""})AND({')
            .concat(Y.ResourceAuditType, ".EX.Monthly}OR{")
            .concat(Y.ResourceAuditType, ".EX.Buffer})"),
          fma: "{".concat(Y.ActiveEmployee, ".EX.true}"),
        };
      function V(e) {
        return K.apply(this, arguments);
      }
      function K() {
        return (K = Object(v.a)(
          Object(R.a)().mark(function e(t) {
            var r, n, c, a, o, s;
            return Object(R.a)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = l("userid")),
                      (n = l("auditid")),
                      (c = t[0][h.datatableField.AuditType]),
                      (a = t.map(function (e) {
                        return ""
                          .concat(n, ",")
                          .concat(e[h.datatableField.RecordID], ",")
                          .concat(c, ",")
                          .concat(r, ",")
                          .concat(c && "Buffer" === c ? 1 : 0);
                      })),
                      (e.next = 6),
                      y(h.tbResourceAudits.dbid, a, h.tbResourceAudits.clist)
                    );
                  case 6:
                    return (
                      (o = e.sent),
                      (s = o.rids.map(function (e) {
                        return e.rid;
                      })),
                      (e.next = 10),
                      g(
                        h.tbResourceAudits.dbid,
                        Object.values(h.tbResourceAudits.fields).join("."),
                        "{"
                          .concat(h.tbResourceAudits.fields.RecordID, ".EX.")
                          .concat(s.join(" OR "), "}"),
                        "",
                        "num-99999999",
                      )
                    );
                  case 10:
                    return e.abrupt("return", e.sent);
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function W(e) {
        return Z.apply(this, arguments);
      }
      function Z() {
        return (Z = Object(v.a)(
          Object(R.a)().mark(function e(t) {
            return Object(R.a)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      g(
                        h.tbResourceID.dbid,
                        Object.values(h.tbResourceID.fields).join("."),
                        "{"
                          .concat(h.tbResourceID.fields.RelatedResource, ".EX.")
                          .concat(t.join(" OR "), "}"),
                        "",
                        "num-99999999",
                      )
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function ee(e) {
        return te.apply(this, arguments);
      }
      function te() {
        return (te = Object(v.a)(
          Object(R.a)().mark(function e(t) {
            return Object(R.a)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      g(J.dbid, J.clist, J[t], "", "num-99999999")
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function re(e) {
        return ne.apply(this, arguments);
      }
      function ne() {
        return (ne = Object(v.a)(
          Object(R.a)().mark(function e(t) {
            var r, n;
            return Object(R.a)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    ((r = Object(R.a)().mark(function e() {
                      var r, c, a, o, s, i, u, d, l;
                      return Object(R.a)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = t[n]),
                                (c = h.tbResourceAudits.fields),
                                (a = h.tbAuditTask.fields),
                                (o = r[c.RelatedResource]),
                                (s = Object.values(h.tbAuditTask.fields).join(
                                  ".",
                                )),
                                (e.next = 7),
                                g(
                                  h.tbAuditTask.dbid,
                                  s,
                                  "{"
                                    .concat(
                                      a.AuditofTaskCompleted,
                                      ".TV.true}AND{",
                                    )
                                    .concat(a.AuditofTaskCompleteDate, ".GT.")
                                    .concat(
                                      r[
                                        h.tbResourceAudits.fields.AuditStartDate
                                      ],
                                      "}AND{",
                                    )
                                    .concat(a.AuditofTaskCompleteDate, ".LT.")
                                    .concat(
                                      r[h.tbResourceAudits.fields.AuditEndDate],
                                      "}AND{",
                                    )
                                    .concat(a.Auditorselected, ".EX.")
                                    .concat(o, "}AND{")
                                    .concat(a.TaskScore, ".EX._FID_")
                                    .concat(a.MaxTaskScore, "}"),
                                )
                              );
                            case 7:
                              if (!((i = e.sent) && i.length > 0)) {
                                e.next = 14;
                                break;
                              }
                              return (
                                (u = Object(B.a)(i).sort(function () {
                                  return 0.5 - Math.random();
                                })),
                                (d = u.slice(0, 25)),
                                (l = d.map(function (e) {
                                  return ""
                                    .concat(e[a.RecordID], ",")
                                    .concat(r[c.RecordID], ",1");
                                })),
                                (e.next = 14),
                                y(h.tbAuditTask.dbid, l, h.tbAuditTask.clist)
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })),
                      (e.t0 = Object(R.a)().keys(t)));
                  case 2:
                    if ((e.t1 = e.t0()).done) {
                      e.next = 7;
                      break;
                    }
                    return ((n = e.t1.value), e.delegateYield(r(), "t2", 5));
                  case 5:
                    e.next = 2;
                    break;
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var ce = function () {
          var e = l("auditid"),
            t = h.tbQAAudit.dbid;
          window.location = "/db/" + t + "?a=dr&rid=" + e;
        },
        ae = r(198),
        oe = r(95),
        se = 25;
      function ie(e, t) {
        return ue.apply(this, arguments);
      }
      function ue() {
        return (
          (ue = Object(v.a)(
            Object(R.a)().mark(function e(t, r) {
              var n,
                c,
                a = arguments;
              return Object(R.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = a.length > 2 && void 0 !== a[2] ? a[2] : null),
                        (c = a.length > 3 && void 0 !== a[3] ? a[3] : null),
                        "",
                        (e.next = 5),
                        t.forEach(
                          (function () {
                            var e = Object(v.a)(
                              Object(R.a)().mark(function e(t) {
                                var a, o, s, i, u, d, l, b, f, p, j;
                                return Object(R.a)().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (a = new Date(
                                            n ||
                                              t[
                                                h.tbResourceAudits.fields
                                                  .AuditStartDate
                                              ],
                                          ).toISOString()),
                                          (o = new Date(
                                            c ||
                                              t[
                                                h.tbResourceAudits.fields
                                                  .AuditEndDate
                                              ],
                                          ).toISOString()),
                                          (s =
                                            t[
                                              h.tbResourceAudits.fields
                                                .RelatedResource
                                            ]),
                                          (i = r.filter(function (e) {
                                            return (
                                              e[
                                                h.tbResourceID.fields
                                                  .RelatedResource
                                              ] == s
                                            );
                                          })),
                                          (u = {
                                            userIds: [],
                                            resourceIds: [],
                                          }),
                                          i.forEach(function (e) {
                                            var t =
                                                e[
                                                  h.tbResourceID.fields.UserID
                                                ].toLowerCase(),
                                              r =
                                                e[
                                                  h.tbResourceID.fields.UserID
                                                ].toUpperCase();
                                            (u.userIds.push(t),
                                              u.userIds.push(r),
                                              u.resourceIds.push(
                                                e[
                                                  h.tbResourceID.fields.RecordID
                                                ],
                                              ));
                                          }),
                                          (e.next = 8),
                                          g(
                                            h.tbEncounters.dbid,
                                            Object.values(
                                              h.tbEncounters.fields,
                                            ).join("."),
                                            "{"
                                              .concat(
                                                h.tbEncounters.fields
                                                  .CompletedDate,
                                                ".GTE.",
                                              )
                                              .concat(a, "}AND{")
                                              .concat(
                                                h.tbEncounters.fields
                                                  .CompletedDate,
                                                ".LTE.",
                                              )
                                              .concat(o, "}AND{")
                                              .concat(
                                                h.tbEncounters.fields
                                                  .ReadyToProcess,
                                                ".EX.0}AND{",
                                              )
                                              .concat(
                                                h.tbEncounters.fields.UserID,
                                                ".EX.'",
                                              )
                                              .concat(
                                                u.userIds.join(" OR "),
                                                "'}AND{",
                                              )
                                              .concat(
                                                h.tbEncounters.fields
                                                  .RelatedResourceID,
                                                ".EX.'",
                                              )
                                              .concat(
                                                u.resourceIds.join(" OR "),
                                                "'}",
                                              ),
                                            "",
                                            "num-99999999",
                                          )
                                        );
                                      case 8:
                                        if ((d = e.sent) && 0 !== d.length) {
                                          e.next = 12;
                                          break;
                                        }
                                        return (
                                          "No task records found!",
                                          e.abrupt("return")
                                        );
                                      case 12:
                                        ((l = []), (b = Object(ae.a)(d)));
                                        try {
                                          for (b.s(); !(f = b.n()).done;)
                                            ((p = f.value),
                                              (j =
                                                p[
                                                  h.tbEncounters.fields
                                                    .UniqueIdentifier
                                                ]) &&
                                                !l.includes(j) &&
                                                l.push(p));
                                        } catch (O) {
                                          b.e(O);
                                        } finally {
                                          b.f();
                                        }
                                        if (!(l.length <= se)) {
                                          e.next = 19;
                                          break;
                                        }
                                        return ((e.next = 18), de(l, t));
                                      case 18:
                                      case 21:
                                        return e.abrupt("return");
                                      case 19:
                                        return (
                                          (e.next = 21),
                                          de(be(l, se), t)
                                        );
                                      case 22:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              }),
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })(),
                        )
                      );
                    case 5:
                      return (
                        alert("Audit records saved successfully!"),
                        e.abrupt("return")
                      );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )),
          ue.apply(this, arguments)
        );
      }
      function de(e, t) {
        return le.apply(this, arguments);
      }
      function le() {
        return (le = Object(v.a)(
          Object(R.a)().mark(function e(t, r) {
            var n;
            return Object(R.a)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.map(function (e) {
                        return ""
                          .concat(e[h.tbEncounters.fields.RecordID], ",")
                          .concat(
                            r[h.tbResourceAudits.fields.RecordID],
                            ",1,0",
                          );
                      })),
                      (e.next = 3),
                      y(h.tbEncounters.dbid, n, h.tbEncounters.clist)
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function be(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = h.tbEncounters.fields.CompletedDate,
          c = "compare";
        e = e.map(function (e) {
          var t;
          if (e[n]) {
            var r = new Date(e[n]);
            t = ""
              .concat(r.getDate())
              .concat(r.getMonth() + 1)
              .concat(r.getFullYear());
          } else t = e.rid;
          return Object(o.a)(Object(o.a)({}, e), {}, Object(oe.a)({}, c, t));
        });
        var a = Array.from(
          new Set(
            e.map(function (e) {
              return e[c];
            }),
          ),
        );
        if (!r && a.length <= t && e.length <= t) return e;
        var s = (function (e, t) {
          var r = {},
            n = e.slice().sort(function (e, r) {
              return e[t].toString().localeCompare(r[t]);
            });
          n.forEach(function (e) {
            var n = e[t];
            (r[n] || (r[n] = []), r[n].push(e));
          });
          var c = Object.keys(r),
            a = [],
            o = 0;
          for (; a.length < n.length;) {
            var s = c[o],
              i = r[s];
            (i.length > 0 && a.push(i.shift()), (o = (o + 1) % c.length));
          }
          return a;
        })(e, c);
        return s.slice(0, t);
      }
      function fe() {
        var e = Object(n.useContext)(M),
          t = Object(n.useContext)(X).filter,
          r = Object(n.useState)(!1),
          c = Object(P.a)(r, 2),
          a = c[0],
          o = c[1],
          s = Object(n.useState)(!1),
          i = Object(P.a)(s, 2),
          u = i[0],
          d = i[1],
          l = Object(n.useState)({}),
          b = Object(P.a)(l, 2),
          f = b[0],
          p = b[1];
        Object(n.useEffect)(function () {
          (j(),
            q()("#table_id").on("click", ".dt-checkboxes", function (e) {
              var t = q()(this).closest("table").DataTable(),
                r = q()(this).closest("tr")[0]._DT_RowIndex;
              t.cell({ row: r, column: 10 }).data(this.checked);
            }));
        }, []);
        var j = function () {
            p(
              q()("#table_id").DataTable({
                columnDefs: [
                  {
                    orderable: !1,
                    className: "select-checkbox",
                    targets: 10,
                    render: function (e, t, r) {
                      return '<input type="checkbox"  class="dt-checkboxes" '.concat(
                        e ? "checked" : "",
                        "  >",
                      );
                    },
                  },
                  { targets: 0, visible: !1, searchable: !1 },
                  { targets: 5, orderable: !1 },
                  { targets: 2, orderable: !1 },
                  { targets: 3, orderable: !1 },
                  { targets: 4, orderable: !1 },
                ],
                order: [[6, "desc"]],
              }),
            );
          },
          O = (function () {
            var r = Object(v.a)(
              Object(R.a)().mark(function r(n, c) {
                var a, s;
                return Object(R.a)().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            d(!0),
                            o(!1),
                            (r.prev = 2),
                            (r.next = 5),
                            ee(t)
                          );
                        case 5:
                          ((a = r.sent),
                            e(L(I, a)),
                            f.clear().draw(),
                            a.forEach(function (e) {
                              var t =
                                e[h.tbResources.fields.LastAuditCompletedOn];
                              if (t) {
                                var r = new Date(t);
                                t = ""
                                  .concat(r.getUTCMonth() + 1, "/")
                                  .concat(r.getUTCDate(), "/")
                                  .concat(r.getUTCFullYear());
                              }
                              var n = e[h.tbResources.fields.DeactivationDate];
                              if (n) {
                                var c = new Date(n);
                                n = ""
                                  .concat(c.getUTCMonth() + 1, "/")
                                  .concat(c.getUTCDate(), "/")
                                  .concat(c.getUTCFullYear());
                              }
                              f.row
                                .add([
                                  e[h.tbResources.fields.RecordID],
                                  e[h.tbResources.fields.ResourceName],
                                  e[h.tbResources.fields.Region] || "",
                                  e[h.tbResources.fields.RoleCategory] || "",
                                  e[h.tbResources.fields.PrimaryRole] || "",
                                  e[h.tbResources.fields.RelatedCompany] || "",
                                  t || "",
                                  e[h.tbResources.fields.ResourceAuditType],
                                  e[
                                    h.tbResources.fields.LastCompletedAuditMonth
                                  ] || "",
                                  n || "",
                                  !1,
                                ])
                                .draw(!1);
                            }),
                            (s = {
                              2: "Region",
                              3: "Role Category",
                              4: "Primary Role",
                              5: "Company",
                            }),
                            f.columns([2, 3, 4, 5]).every(function (e) {
                              var t = f.column(e),
                                r = s[e],
                                n = q()(
                                  '<select><option value="">'.concat(
                                    r,
                                    ": All</option></select>",
                                  ),
                                )
                                  .appendTo(q()(t.header()).empty())
                                  .on("change", function () {
                                    var e = q.a.fn.dataTable.util.escapeRegex(
                                      q()(this).val(),
                                    );
                                    t.search(
                                      e ? "^" + e + "$" : "",
                                      !0,
                                      !1,
                                    ).draw();
                                  });
                              t.data()
                                .unique()
                                .sort()
                                .each(function (e, t) {
                                  n.append(
                                    '<option value="' +
                                      e +
                                      '">' +
                                      e +
                                      "</option>",
                                  );
                                });
                            }),
                            (r.next = 17));
                          break;
                        case 13:
                          ((r.prev = 13),
                            (r.t0 = r.catch(2)),
                            console.error(r.t0),
                            alert("Getting Error :" + r.t0.message));
                        case 17:
                          (d(!1), o(!0));
                        case 19:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[2, 13]],
                );
              }),
            );
            return function (e, t) {
              return r.apply(this, arguments);
            };
          })(),
          m = (function () {
            var r = Object(v.a)(
              Object(R.a)().mark(function r(n, c) {
                var a, o, s, i, u, d;
                return Object(R.a)().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (
                            ((a = h.datatableField),
                            (o = f.data().toArray()),
                            (s = o.filter(function (e) {
                              return e[a.Create];
                            })).length)
                          ) {
                            r.next = 6;
                            break;
                          }
                          return (
                            alert("Please select row"),
                            r.abrupt("return")
                          );
                        case 6:
                          return (
                            (i = s.map(function (e) {
                              return e[a.RecordID];
                            })),
                            e(L(C, !0)),
                            (r.prev = 8),
                            (r.next = 11),
                            V(s)
                          );
                        case 11:
                          return ((u = r.sent), (r.next = 14), W(i));
                        case 14:
                          if (((d = r.sent), "auditor" !== t)) {
                            r.next = 20;
                            break;
                          }
                          return ((r.next = 18), re(u));
                        case 18:
                          r.next = 29;
                          break;
                        case 20:
                          return ((r.prev = 20), (r.next = 23), ie(u, d));
                        case 23:
                          r.next = 29;
                          break;
                        case 25:
                          ((r.prev = 25),
                            (r.t0 = r.catch(20)),
                            console.error(r.t0),
                            alert(
                              "Error when creating Encounters:" + r.t0.message,
                            ));
                        case 29:
                          r.next = 34;
                          break;
                        case 31:
                          ((r.prev = 31),
                            (r.t1 = r.catch(8)),
                            alert("Getting Error :" + r.t1.message));
                        case 34:
                          e(L(C, !1));
                        case 35:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [
                    [8, 31],
                    [20, 25],
                  ],
                );
              }),
            );
            return function (e, t) {
              return r.apply(this, arguments);
            };
          })();
        return Object(U.jsxs)(U.Fragment, {
          children: [
            Object(U.jsx)(x.a.Row, {
              children: Object(U.jsx)(x.a.Column, {
                children: Object(U.jsx)("div", {
                  className: "table-responsive",
                  children: Object(U.jsxs)("table", {
                    id: "table_id",
                    style: { textAlign: "center" },
                    children: [
                      Object(U.jsx)("thead", {
                        children: Object(U.jsx)("tr", {
                          children: Object(U.jsxs)(U.Fragment, {
                            children: [
                              Object(U.jsx)("th", { children: "ID" }),
                              Object(U.jsx)("th", {
                                className: "longHd",
                                children: "Name",
                              }),
                              Object(U.jsx)("th", {
                                className: "longHd",
                                children: "Region",
                              }),
                              Object(U.jsx)("th", {
                                className: "longHd",
                                children: "Role Category",
                              }),
                              Object(U.jsx)("th", {
                                className: "mdHd",
                                children: "Primary Role",
                              }),
                              Object(U.jsx)("th", {
                                className: "mdHd",
                                children: "Company",
                              }),
                              Object(U.jsx)("th", {
                                className: "mdHd",
                                children: "Last Audit",
                              }),
                              Object(U.jsx)("th", { children: "Audit Type" }),
                              Object(U.jsx)("th", {
                                className: "mdHd",
                                children: "Last Audit Month",
                              }),
                              Object(U.jsx)("th", {
                                className: "mdHd",
                                children: "Deactivation Date",
                              }),
                              Object(U.jsx)("th", {
                                className: "longHd",
                                children: "Create Audit",
                              }),
                            ],
                          }),
                        }),
                      }),
                      Object(U.jsx)("tbody", {}),
                    ],
                  }),
                }),
              }),
            }),
            Object(U.jsx)(x.a.Row, {
              children: Object(U.jsxs)(x.a.Column, {
                children: [
                  a &&
                    Object(U.jsx)(U.Fragment, {
                      children: Object(U.jsx)(H.a, {
                        primary: !0,
                        floated: "right",
                        onClick: m,
                        children: "Continue",
                      }),
                    }),
                  Object(U.jsx)(H.a, {
                    floated: "right",
                    onClick: function () {
                      return ce();
                    },
                    children: "Cancel",
                  }),
                  Object(U.jsx)(H.a, {
                    floated: "right",
                    disabled: u,
                    positive: !0,
                    onClick: function () {
                      O();
                    },
                    children: "Retrieve List",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var pe = r(199),
        je = r(296),
        he = r(297),
        Oe = [
          {
            key: "resourceTask",
            value: "resourceTask",
            text: "Resource Tasks",
          },
          { key: "auditTask", value: "auditTask", text: "Audit Tasks" },
          { key: "errors", value: "errors", text: "Errors" },
          { key: "rebuttals", value: "rebuttals", text: "Rebuttals" },
        ],
        me = function (e) {
          var t = Object(n.useContext)(M),
            r = Object(n.useContext)(X).loading,
            c = Object(n.useState)(null),
            a = Object(P.a)(c, 2),
            o = a[0],
            s = a[1],
            i = Object(n.useState)(null),
            u = Object(P.a)(i, 2),
            d = u[0],
            b = u[1],
            f = Object(n.useState)(null),
            p = Object(P.a)(f, 2),
            j = p[0],
            O = p[1],
            m = Object(n.useState)(null),
            g = Object(P.a)(m, 2),
            D = g[0],
            T = g[1],
            w = Object(n.useCallback)(
              Object(v.a)(
                Object(R.a)().mark(function e() {
                  var r, n, c, a, s, i, u, b, f, p, O, m, x, v, g, k, T;
                  return Object(R.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (o && d && j && D) {
                              e.next = 3;
                              break;
                            }
                            return (
                              alert("Please fill all the required fields"),
                              e.abrupt("return")
                            );
                          case 3:
                            return (
                              t(L(C, !0)),
                              (r = l("userid")),
                              (n = l("auditid")),
                              (c = h[D]),
                              (e.prev = 7),
                              (a = function e() {
                                var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : 0,
                                  r =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                      ? arguments[1]
                                      : 0;
                                if (p.length !== parseInt(d)) {
                                  var n = b[f[r]];
                                  (n && n.length > 0 && n[t] && p.push(n[t]),
                                    r < f.length ? r++ : ((r = 0), t++),
                                    e(t, r));
                                }
                              }),
                              (e.next = 11),
                              A(c.dbid, o)
                            );
                          case 11:
                            for (
                              s = e.sent,
                                i = h.tbResourceAudits.groupAuditResource,
                                "resourceTask" === D &&
                                  1 ===
                                    (u = Object(B.a)(
                                      new Set(
                                        s.map(function (e) {
                                          return e[
                                            h.tbEncounters.fields
                                              .RelatedIdRelatedResources
                                          ];
                                        }),
                                      ),
                                    )).length &&
                                  (i = u[0]),
                                b = Object(pe.groupBy)(s, c.fields.UserID),
                                f = Object.keys(b),
                                p = [],
                                O = 0;
                              O < f.length;
                              O++
                            )
                              ((m = f[O]),
                                (x = b[m]),
                                (b[m] = be(x, x.length, !0)));
                            return (
                              s > d ? a() : (p = s),
                              (v = [n, i, "Focused", r, j].join(",")),
                              (e.next = 22),
                              y(
                                h.tbResourceAudits.dbid,
                                v,
                                h.tbResourceAudits.focusedAuditClist,
                              )
                            );
                          case 22:
                            if (
                              ((g = e.sent),
                              1 ===
                                (k = g.rids.map(function (e) {
                                  return e.rid;
                                })).length)
                            ) {
                              e.next = 27;
                              break;
                            }
                            return (
                              alert(
                                "There has been an unknown error while writing data to Resource Audit Table",
                              ),
                              e.abrupt("return")
                            );
                          case 27:
                            return (
                              (T =
                                "resourceTask" === D
                                  ? p.map(function (e) {
                                      return ""
                                        .concat(e.rid, ",")
                                        .concat(k[0], ",1,0");
                                    })
                                  : p.map(function (e) {
                                      return ""
                                        .concat(e.rid, ",")
                                        .concat(k[0], ",1");
                                    })),
                              (e.next = 30),
                              y(c.dbid, T, c.clist)
                            );
                          case 30:
                            (alert("Success! Records saved successfully."),
                              (e.next = 37));
                            break;
                          case 33:
                            ((e.prev = 33),
                              (e.t0 = e.catch(7)),
                              console.error(e.t0),
                              alert(e.t0.toString()));
                          case 37:
                            t(L(C, !1));
                          case 38:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[7, 33]],
                  );
                }),
              ),
              [t, j, d, o],
            );
          return Object(U.jsxs)(x.a.Row, {
            children: [
              Object(U.jsx)(x.a.Column, { computer: 5, mobile: 5, tablet: 5 }),
              Object(U.jsx)(x.a.Column, {
                computer: 6,
                mobile: 6,
                tablet: 6,
                children: Object(U.jsxs)(k.a, {
                  children: [
                    Object(U.jsxs)(k.a.Field, {
                      children: [
                        Object(U.jsx)("label", { children: "Report ID #" }),
                        Object(U.jsx)(je.a, {
                          placeholder: "Report ID #",
                          type: "number",
                          name: "reportId",
                          onChange: function (e, t) {
                            var r = t.value;
                            return s(r);
                          },
                        }),
                      ],
                    }),
                    Object(U.jsxs)(k.a.Field, {
                      children: [
                        Object(U.jsx)("label", { children: "Report Table" }),
                        Object(U.jsx)(he.a, {
                          options: Oe,
                          onChange: function (e, t) {
                            var r = t.value;
                            return T(r);
                          },
                        }),
                      ],
                    }),
                    Object(U.jsxs)(k.a.Field, {
                      children: [
                        Object(U.jsx)("label", {
                          children: "Number of Audit Tasks #",
                        }),
                        Object(U.jsx)(je.a, {
                          placeholder: "Number of Audit Tasks #",
                          type: "number",
                          name: "tasks",
                          onChange: function (e, t) {
                            var r = t.value;
                            return b(r);
                          },
                        }),
                      ],
                    }),
                    Object(U.jsxs)(k.a.Field, {
                      children: [
                        Object(U.jsx)("label", {
                          children: "Focused Audit Record ID #",
                        }),
                        Object(U.jsx)(je.a, {
                          placeholder: "Focused Audit Record ID #",
                          type: "number",
                          name: "tasks",
                          onChange: function (e, t) {
                            var r = t.value;
                            return O(r);
                          },
                        }),
                      ],
                    }),
                    Object(U.jsx)(H.a, {
                      floated: "right",
                      onClick: function () {
                        return ce();
                      },
                      children: "Cancel",
                    }),
                    Object(U.jsx)(H.a, {
                      positive: !0,
                      loading: r,
                      floated: "right",
                      onClick: w,
                      children: "Continue",
                    }),
                  ],
                }),
              }),
              Object(U.jsx)(x.a.Column, { computer: 5, mobile: 5, tablet: 5 }),
            ],
          });
        },
        xe = function () {
          var e = Object(n.useContext)(X),
            t = e.loading,
            r = e.pageType;
          return (
            Object(n.useEffect)(function () {}, []),
            t
              ? Object(U.jsx)(O.a, {
                  active: !0,
                  children: Object(U.jsx)(m.a, { content: "Loading" }),
                })
              : Object(U.jsxs)(x.a, {
                  style: { padding: "20px" },
                  children: [
                    Object(U.jsx)(z, {}),
                    r === E && Object(U.jsx)(fe, {}),
                    r === S && Object(U.jsx)(me, {}),
                  ],
                })
          );
        };
      r(282);
      var Re = function () {
        return Object(U.jsx)(_, {
          children: Object(U.jsx)("div", {
            className: "App",
            children: Object(U.jsx)(xe, {}),
          }),
        });
      };
      a.a.render(Object(U.jsx)(Re, {}), document.getElementById("root"));
    },
  },
  [[283, 1, 2]],
]);
