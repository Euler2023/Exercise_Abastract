---
title: "Exercise AG102: Functorial Diagrams for Newform Quotient Tori"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.6, Exercise 6.6.5, printed p. 251, PDF p. 265"
source_refs:
  - "S7/ch-6/sec-6/ex-5"
created: 2026-10-28
---

# Exercise AG102: Functorial Diagrams for Newform Quotient Tori

## Problem Statement

> [!question] Original Exercise 6.6.5
> (a) Show that diagram (6.19) commutes. (Hints for this exercise are at the end of the book.)
>
> (b) Show that diagram (6.20) commutes.

> **Referenced context.** For $p\nmid N$, (6.19) is the square with upper row $J_1(N)\xrightarrow{T_p}J_1(N)$, lower row $B\xrightarrow{A_p}B$ and both vertical arrows the isogeny $F$. Diagram (6.20) has upper row $B\xrightarrow{A_p}B$, lower row $J_1(N)\xrightarrow{T_p}J_1(N)$ and vertical arrows a reverse isogeny $G$.

## Hints

> [!hint]- Hint 1
> For $p\nmid N$, compare $T_p$ before and after the degeneracy map $g(\tau)\mapsto ng(n\tau)$.

> [!hint]- Hint 2
> Choose a reverse isogeny whose composite with the forward one is multiplication by an integer, then cancel the surjective forward isogeny.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Put $B=\prod_{f,n}A_f$ and let $F:J_1(N)\to B$ be the isogeny constructed in Theorem 6.6.6. Here $f$ runs through representatives of Galois conjugacy classes of newforms of levels $M_f\mid N$, and $n\mid N/M_f$. Let $A_p=\prod_{f,n}a_p(f)$, where each $a_p(f)$ acts by the coefficient-ring endomorphism on $A_f$, not by an arbitrarily chosen complex scalar.
>
> **(a).** Define $D_ng(\tau)=ng(n\tau)$. For $p\nmid N$, in particular $(p,n)=1$, the Fourier coefficient formula gives $T_pD_ng=D_nT_pg$; indeed the coefficient at index $r$ on either side is
> $$
> n\,a_{pr/n}(g)+pn\,a_{r/(pn)}(\langle p\rangle g),
> $$
> with a coefficient interpreted as zero unless its index is a positive integer. The diamond operator commutes with $D_n$ at these levels. Equivalently one can use the unramified double-coset formulas. Thus $T_pD_nf^\sigma=\sigma(a_p(f))D_nf^\sigma$ for every embedding $\sigma:K_f\hookrightarrow\mathbb C$.
>
> The corresponding dual map is $\Psi_{f,n}(\varphi)(f^\sigma)=n\varphi(f^\sigma(n\tau))$. Consequently $\Psi_{f,n}T_p^\vee=a_p(f)^\vee\Psi_{f,n}$. Exercise 6.6.4 ensures the integral period lattices map to the target period lattices; the identity therefore descends to tori. The quotient defining $A_f$ has $T_p=a_p(f)$ by $\mathbb T_{\mathbb Z}/I_f\cong\mathbb Z[a_m(f)]$. Taking products proves $FT_p=A_pF$, exactly (6.19).
>
> **(b).** Choose the reverse isogeny $G:B\to J_1(N)$ by Exercise 6.6.3 so that $GF=[m]$ for an integer $m>0$. Then
> $$
> (T_pG-GA_p)F=T_p[m]-GFT_p=0.
> $$
> Since $F$ is surjective, $T_pG=GA_p$, proving (6.20). This argument works simultaneously for every good prime because the same quasi-inverse $G$ is used. Existence of some reverse isogeny alone does not prove it intertwines the actions; the quasi-inverse choice is the required qualification.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies|Complex Tori and Isogenies]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Referenced diagrams:** (6.19), printed p. 249/PDF p. 263, and (6.20), printed p. 250/PDF p. 264, directly checked.
- **Scope clarification:** The reverse isogeny in (6.20) is chosen as a quasi-inverse of the constructed one; an arbitrary reverse isogeny need not intertwine the operators. The source coefficient $a_p(f)$ denotes a field action.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
