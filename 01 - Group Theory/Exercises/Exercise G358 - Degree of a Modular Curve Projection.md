---
title: "Exercise G358: Degree of a Modular Curve Projection"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.1, Exercise 3.1.1, printed p. 69, PDF p. 83"
source_refs:
  - "S7/ch-3/sec-1/ex-1"
created: 2026-10-28
---

# Exercise G358: Degree of a Modular Curve Projection

## Problem Statement

> [!question] Original Exercise 3.1.1
> Show that natural projection $f:X(\Gamma_1)\longrightarrow X(\Gamma_2)$ has the degree claimed in the text. (A hint for this exercise is at the end of the book.)
>
> **Referenced claim, printed p. 66 / PDF p. 80.** The groups are congruence subgroups with $\Gamma_1\subseteq\Gamma_2$. The claim is
> $$
> \deg f=[\{\pm I\}\Gamma_2:\{\pm I\}\Gamma_1]
> =\begin{cases}[\Gamma_2:\Gamma_1]/2&-I\in\Gamma_2,\ -I\notin\Gamma_1,\\
> [\Gamma_2:\Gamma_1]&\text{otherwise}.\end{cases}
> $$

## Hints

> [!hint]- Hint 1
> Choose an interior point with no effective stabilizer. Its inverse images are indexed by cosets.

> [!hint]- Hint 2
> Adjoin $\{\pm I\}$ to both groups before counting; this does not change their actions.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Put $H_j=\{\pm I\}\Gamma_j$. These groups have the same orbits as $\Gamma_j$. Choose $\tau=2i$. It has no nonidentity fixing transformation in $SL_2(\mathbb Z)$: if a nonidentity matrix with bottom row $(c,d)$ fixes $x+iy$, then $c\ne0$ and
> $$
> 1=|c\tau+d|\ge |c|y\ge y,
> $$
> so its height cannot exceed $1$. The scalar matrices $\pm I$ are its entire stabilizer.
>
> Every point over $H_2\tau$ is $H_1g\tau$ for some $g\in H_2$. The map
> $$
> H_1\backslash H_2\longrightarrow f^{-1}(H_2\tau),\qquad H_1g\longmapsto H_1g\tau
> $$
> is surjective. If $H_1g\tau=H_1g'\tau$, choose $a\in H_1$ with $ag\tau=g'\tau$. Then $(g')^{-1}ag$ fixes $\tau$ and hence equals $\pm I$. Thus $ag=\pm g'$, giving $H_1g=H_1g'$. This proves injectivity.
>
> All points of this fiber are nonelliptic, since stabilizers are conjugated by $g$. In the local coordinates from Chapter 2 the projection is locally bijective there. The degree of a nonconstant holomorphic map between compact Riemann surfaces is the number of points of an unramified fiber, by the local-degree argument on printed pp. 65–66 / PDF pp. 79–80. Therefore $\deg f=[H_2:H_1]$.
>
> If $-I\in\Gamma_2$ but $-I\notin\Gamma_1$, then $H_2=\Gamma_2$ and $[H_1:\Gamma_1]=2$, so
> $$
> [\Gamma_2:\Gamma_1]=[H_2:H_1]\,[H_1:\Gamma_1]=2[H_2:H_1].
> $$
> If both groups contain $-I$, adjoining it changes neither group. If neither contains it, then $[H_j:\Gamma_j]=2$ for both $j$, and computing $[H_2:\Gamma_1]$ through $\Gamma_2$ and through $H_1$ gives $2[\Gamma_2:\Gamma_1]=2[H_2:H_1]$. These are exactly the remaining cases.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 69 / PDF 83. The solution above is independently derived.
- **Imported input:** The holomorphic quotient charts and the local-degree definition are used; the coset count and the factor of two are proved here.
- **Routing:** The principal toolkit is group-theory; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
