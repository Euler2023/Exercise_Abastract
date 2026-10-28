---
title: "Exercise AG125: Pushforward and Pullback on Divisor Groups"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.1, Exercise 5.1.6, printed p. 168, PDF p. 182"
source_refs:
  - "S7/ch-5/sec-1/ex-6"
created: 2026-10-28
---

# Exercise AG125: Pushforward and Pullback on Divisor Groups

## Problem Statement

> [!question] Original Exercise 5.1.6
> Show that in the special cases $\Gamma_1\supset\Gamma_2$, $\alpha^{-1}\Gamma_1\alpha=\Gamma_2$, and $\Gamma_1\subset\Gamma_2$ the divisor group interpretation of $[\Gamma_1\alpha\Gamma_2]_k$ gives a surjection, an isomorphism, and an injection.
>
> **Referenced special cases, printed pp. 166–167 / PDF pp. 180–181.** In the first and third cases take $\alpha=I$. The divisor group is free abelian on curve points. The operator goes from $\operatorname{Div}(X_2)$ to $\operatorname{Div}(X_1)$, sending $\Gamma_2\tau$ to $\sum_j\Gamma_1\beta_j\tau$ and retaining repetitions.

## Hints

> [!hint]- Hint 1
> In the first two cases, inspect the resulting map on the basis of points.

> [!hint]- Hint 2
> In the third case, images of distinct points have disjoint nonempty supports and positive integer multiplicities.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **First case.** If $\Gamma_1\supseteq\Gamma_2$ and $\alpha=I$, the double coset has one left orbit. The point formula is $\Gamma_2\tau\mapsto\Gamma_1\tau$. Every target point has a representative $\tau\in\mathcal H^*$ and a preimage $\Gamma_2\tau$. Thus each target basis divisor has a preimage basis divisor. Taking finite integer linear combinations proves surjectivity.
>
> **Second case.** If $\alpha^{-1}\Gamma_1\alpha=\Gamma_2$, the double coset has one left orbit, represented by $\alpha$. The point formula $\Gamma_2\tau\mapsto\Gamma_1\alpha\tau$ has inverse $\Gamma_1z\mapsto\Gamma_2\alpha^{-1}z$; conjugation checks both on classes. A bijection of bases extends to an isomorphism of free abelian groups.
>
> **Third case.** Suppose $\Gamma_1\subseteq\Gamma_2$ and $\alpha=I$. Write $\Gamma_2=\coprod_j\Gamma_1\gamma_j$ and let $p:X_1\to X_2$ be the quotient projection. The image of $P=\Gamma_2\tau$ is
> $$
> D_P=\sum_j\Gamma_1\gamma_j\tau.
> $$
> Its support is precisely the nonempty fiber $p^{-1}(P)$: every term lies in that fiber, and every fiber point is $\Gamma_1\gamma\tau$ with $\gamma\in\Gamma_2$, hence equals a listed term after writing $\gamma=\eta\gamma_j$. Every multiplicity is a positive integer.
>
> Distinct fibers are disjoint. If $D=\sum_Pn_PP$ has zero image, choose a point $Q\in p^{-1}(P)$. Its coefficient in the image is $n_Pm_Q$, with $m_Q>0$. Since this integer vanishes, $n_P=0$. Doing this for every $P$ gives $D=0$, proving injectivity even at ramified points.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curves and Moduli]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.1.6, printed p. 168 / PDF p. 182]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Multiplicity boundary:** Matrix cosets count repetitions. If the groups have different intersections with $\{\pm I\}$, these multiplicities differ from geometric pullback multiplicities by $|\Gamma_2\cap\{\pm I\}|/|\Gamma_1\cap\{\pm I\}|$. For example, if $-I\notin\Gamma_1$ and $\Gamma_2=\{\pm I\}\Gamma_1$, the curves are identical but the coset formula gives twice each point. The proof uses the actual positive multiplicities and does not equate them with geometric ramification indices.
- **Source context:** The special cases and divisor formula were checked on printed pp. 166–167 / PDF pp. 180–181. Divisor maps go in the reverse direction from the action on modular forms.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
