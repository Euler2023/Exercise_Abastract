---
title: "Exercise AG70: Compactness of the Extended Modular Fundamental Region"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.4, Exercise 2.4.3, printed p. 62, PDF p. 77; extended upper half-plane topology, printed p. 58, PDF p. 73"
source_refs:
  - "S7/ch-2/sec-4/ex-3"
created: 2026-10-28
---

# Exercise AG70: Compactness of the Extended Modular Fundamental Region

## Problem Statement

> [!question] Original Exercise 2.4.3
> Show that the set $\mathcal D^*=\mathcal D\cup\{\infty\}$ is compact in the $\mathcal H^*$ topology.
>
> **Referenced definitions.** Here
> $$
> \mathcal D=\{z\in\mathcal H:|\operatorname{Re}z|\leq1/2,\ |z|\geq1\},
> \qquad \mathcal H^*=\mathcal H\cup\mathbb Q\cup\{\infty\}.
> $$
> The topology restricts to the usual Euclidean topology on $\mathcal H$. A basis of cusp neighborhoods consists of
> $$
> \alpha(\mathcal N_M\cup\{\infty\}),\qquad
> \mathcal N_M=\{z\in\mathcal H:\operatorname{Im}z>M\},\quad
> M>0,\quad \alpha\in SL_2(\mathbb Z).
> $$

## Hints

> [!hint]- Hint 1
> A member of an open cover containing $\infty$ contains the part of $\mathcal D$ above some horizontal line.

> [!hint]- Hint 2
> The remaining part is closed and bounded in the complex plane. Use $\operatorname{Im}z\geq\sqrt3/2$ on $\mathcal D$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution. The imported real-analysis input is the Heine–Borel theorem in $\mathbb R^2$.
>
> First, the sets $\mathcal N_M\cup\{\infty\}$ form a neighborhood basis at $\infty$. Indeed, a displayed cusp-basic set contains $\infty$ only if $\alpha(\infty)=\infty$. Such an integer determinant-one matrix is $\pm\begin{pmatrix}1&n\\0&1\end{pmatrix}$ for some $n\in\mathbb Z$, so its action translates horizontally and preserves every $\mathcal N_M$.
>
> Let $\{O_i:i\in I\}$ be any open cover of $\mathcal D^*$ in its subspace topology. Choose $i_0$ with $\infty\in O_{i_0}$. By the preceding basis statement, some $M>1$ satisfies
> $$
> \mathcal D^*\cap(\mathcal N_M\cup\{\infty\})\subseteq O_{i_0}.
> $$
> Every point not covered by this chosen tail lies in
> $$
> K_M=\{x+iy:|x|\leq1/2,\ x^2+y^2\geq1,\ \sqrt3/2\leq y\leq M\}.
> $$
> The lower bound follows from $y^2=|z|^2-x^2\geq1-1/4=3/4$ for $z\in\mathcal D$. The set $K_M$ is closed and bounded in $\mathbb R^2$ and lies inside $\mathcal H$, where the topology is Euclidean. Heine–Borel therefore makes it compact. Restricting the given cover to $K_M$ yields finitely many members $O_{i_1},\ldots,O_{i_r}$ covering $K_M$. Together with $O_{i_0}$ they cover $\mathcal D^*$.
>
> This proves the finite-subcover property. For completeness, $\mathcal D^*$ is Hausdorff as well: two finite points have disjoint small Euclidean neighborhoods inside $\mathcal H$; a finite point $z$ and $\infty$ have disjoint neighborhoods by choosing $M>\operatorname{Im}z+1$ and a small Euclidean disk about $z$ lying below the line $\operatorname{Im}w=M$. Thus the conclusion also holds under the convention that compactness includes Hausdorffness.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Compactness and Quasi-Compactness|Compactness and Quasi-Compactness]]
- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Fundamental Domain|Fundamental Domain]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The exercise and cusp-neighborhood definition were checked on the rendered original pages [S7, Exercise 2.4.3, printed p. 62 / PDF p. 77; topology definition, printed p. 58 / PDF p. 73]. The source uses this exercise in Proposition 2.4.2, printed p. 59 / PDF p. 74; the proof here is independent.
- **Topology boundary:** The proof uses the specified cusp topology, rather than the subspace topology from the Riemann sphere on all of $\mathcal H^*$. On this particular set $\mathcal D^*$, a high tail is sufficient to control the only adjoined cusp.
- **Routing:** The argument is an open-cover compactness proof for the surface's compactification, so it is filed under Arithmetic Geometry.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
