---
title: "Exercise AG139: Reduction of the Planar Moduli Coordinate Map"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.6, Exercise 8.6.1, printed p. 353, PDF p. 366"
source_refs:
  - "S7/ch-8/sec-6/ex-1"
created: 2026-10-28
---

# Exercise AG139: Reduction of the Planar Moduli Coordinate Map

## Problem Statement

> [!question] Original Exercise 8.6.1
> Show that a diagram as in Igusa's Theorem but with the planar models of $X_1(N)$ and $\widetilde X_1(N)$ commutes. (A hint for this exercise is at the end of the book.)

> **Context and notation.** Here $p\nmid N$. The primes exclude $j=0,1728$ in characteristic $p$ and any further points at which the planar rational-coordinate maps are undefined. The maps are described in Theorem 8.6.1, printed pp. 352–353 / PDF pp. 365–366. Points, including the coefficients of $E$, are taken over $\overline{\mathbb Q}$ before reduction and over $\overline{\mathbb F}_p$ afterward.

## Hints

> [!hint]- Hint 1
> Use the universal equation (8.5), whose coefficients reduce directly when $j$ and $j-1728$ are units.

> [!hint]- Hint 2
> Both routes take $[E_j,Q]$ to the pair $(\widetilde j,\widetilde{x(Q)})$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Use the general universal curve
> $$
> E_j:y^2+xy=x^3-\frac{36}{j-1728}x-\frac1{j-1728}.
> $$
> Its discriminant is $j^2/(j-1728)^3$ and its invariant is $j$. If $j$ is integral at the chosen prime and its reduction avoids $0,1728$, its displayed coefficients are integral and its discriminant is a unit. Thus reducing its equation gives exactly the universal equation $\widetilde E_{\widetilde j}$ over the residue field.
>
> Let $[E_j,Q]$ lie in the primed good-reduction moduli set and let $x=x(Q)$. Prime-to-$p$ torsion reduction is injective by Proposition 8.4.4, so the point of exact order $N$ reduces to one of exact order $N$. For $N>1$ it remains different from the origin, hence in the affine chart; its coordinates are integral in the good model and their reductions are the coordinates of $\widetilde Q$. Consequently
> $$
> \widetilde{(j,x(Q))}=(\widetilde j,\widetilde{x(Q)})=(j(\widetilde E_j),x(\widetilde Q)).
> $$
> The first equality is coordinatewise reduction and the second uses both the invariant identity and reduction of the same affine coordinate function. Equivalently, evaluate the integral defining equation of the planar model at $(j,x(Q))$ and then reduce; evaluation commutes with reduction. Removing the finitely many loci where a chosen rational coordinate or its denominator is undefined gives the stated primed diagram:
> $$
> \begin{array}{ccc}
> S_1(N)'_{\mathrm{gd}}&\xrightarrow{\ [E_j,Q]\mapsto(j,x(Q))\ }&X_1(N)^{\mathrm{planar}}\\
> \downarrow\mathrm{red}&&\downarrow\mathrm{red}\\
> \widetilde S_1(N)'&\xrightarrow{\ [\widetilde E,\widetilde Q]\mapsto(j(\widetilde E),x(\widetilde Q))\ }&\widetilde X_1(N)^{\mathrm{planar}}.
> \end{array}
> $$
> At levels where a trivial marked point is permitted, omit its unavailable affine coordinate and use the $j$ model of the moduli curve. For the nontrivial-point planar model in the exercise, the preceding computation is the required commutation.
>
> This proves compatibility on the planar open sets only. Compatibility after passage to nonsingular projective models, and the good-reduction assertion for those models, are the additional content of Igusa's Theorem, not consequences silently supplied by this coordinate computation.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 353 / PDF p. 366. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
