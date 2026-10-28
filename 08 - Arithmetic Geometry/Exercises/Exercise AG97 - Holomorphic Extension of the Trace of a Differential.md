---
title: "Exercise AG97: Holomorphic Extension of the Trace of a Differential"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.2, Exercise 6.2.4, printed p. 229, PDF p. 243"
source_refs:
  - "S7/ch-6/sec-2/ex-4"
created: 2026-10-28
---

# Exercise AG97: Holomorphic Extension of the Trace of a Differential

## Problem Statement

> [!question] Original Exercise 6.2.4
> This exercise extends the trace holomorphically from $Y'$ to all of $Y$. Part (a) gives an intrinsic argument and part (b) gives a lower-powered argument using local coordinates. Fill in details.
>
> (a) Every path $\delta$ in $Y'$ has $d$ lifts $\gamma$ in $X'$. By definition of the trace, $\int_\delta\operatorname{tr}_h\omega=\sum_\gamma\int_\gamma\omega$ for $\omega\in\Omega^1_{\mathrm{hol}}(X)$. Let $\widetilde U\subset Y$ be homeomorphic to a disk and contain only one point $y\in h(\mathcal E)$, and let $\widetilde U'=\widetilde U-\{y\}\subset Y'$. Any loop $\beta$ in $\widetilde U'$ lifts to fewer than $d$ loops $\alpha$ in $h^{-1}(\widetilde U)$. Each connected component of $h^{-1}(\widetilde U)$ is homeomorphic to a disk and so $\int_\beta\operatorname{tr}_h\omega=\sum_\alpha\int_\alpha\omega=0$. This shows that integrating $\operatorname{tr}_h\omega$ is path-independent in $\widetilde U'$. Let $w(y)=\int_{\widetilde y}^y\operatorname{tr}_h(\omega)$ where $\widetilde y$ is any point in $\widetilde U'$. Then $w$ is holomorphic on $\widetilde U'$ and $dw=\operatorname{tr}_h\omega$. The expression $w(y)=\sum_\gamma\int_\gamma\omega$ shows that $w$ is bounded on $\widetilde U'$ and hence extends holomorphically to $\widetilde U$. Therefore so does $\operatorname{tr}_h$.
>
> (b) Let $y\in h(\mathcal E)$ be the image of an exceptional point. Suppose first that the ramification of $h$ over $y$ is total, i.e., $h^{-1}(y)$ is a single point $x$ with $e_x=\deg(h)$. In suitable local coordinates the map about $x$ is $r=h(q)=q^e$ (where $e=e_x$) on some disk $V$ about $q=0$. For any nonzero $r_0\in h(V)$ let
> $$
> (\ )^{1/e}:\{r:|r-r_0|<|r_0|\}\longrightarrow V
> $$
> denote a holomorphic branch of the $e$th root function so that the local inverses of $h$ about $r_0$ are all of the branches, $h_i^{-1}=\mu_e^i(\ )^{1/e}$ for $i=0,\ldots,e-1$. Let $\omega=f(q)dq$ on $V$. Then the trace on $h(V)\setminus\{0\}$ is
> $$
> \operatorname{tr}_h\omega
> =\sum_{i=0}^{e-1}f(\mu_e^ir^{1/e})d(\mu_e^ir^{1/e})
> =\frac1e\sum_{i=0}^{e-1}f(\mu_e^ir^{1/e})\mu_e^ir^{1/e-1}dr.
> $$
> If $f$ has power series expansion $f(q)=\sum_{n=0}^\infty a_nq^n$ then rearranging a double sum shows that locally
> $$
> \operatorname{tr}_h\omega=\sum_{m=0}^\infty a_{(m+1)e-1}r^m dr,
> $$
> and this is holomorphic at $r=0$. In the general case where $h^{-1}(y)$ contains more than one point $x$, each with its ramification degree $e_x$, carrying out this process at each $x$ and summing the results shows that $\operatorname{tr}_h\omega$ extends holomorphically to $y$.

## Hints

> [!hint]- Hint 1
> For (a), individual lifts of a loop may fail to close. Join them according to the monodromy permutation; use local primitives on the resulting disk components.

> [!hint]- Hint 2
> For (b), sum the roots of unity. Only powers with $e\mid(n+1)$ survive, and the apparent negative power cancels.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $d=\deg h$, let $\mathcal E$ be the ramification points, and let $Y'=Y\setminus h(\mathcal E)$ and $X'=h^{-1}(Y')$. Off the branch values the trace is the sum of pullbacks by the $d$ local inverse branches. The sum is single valued because continuation permutes the branches. We give both requested extension arguments.
>
> **(a) Primitive argument, with the lift count stated precisely.** Fix a branch value $y_0$. Shrink a coordinate disk $D$ about it so that $h^{-1}(D)$ is a disjoint union of disks $D_x$, one about each $x\in h^{-1}(y_0)$, with local maps $q\mapsto q^{e_x}$. Shrink further if necessary so their closures lie inside disks on which $\omega$ has holomorphic primitives $F_x$. These primitives are bounded on the smaller closed disks.
>
> A loop $\beta$ in $D\setminus\{y_0\}$ permutes the $d$ sheets. Its $d$ lifted paths concatenate according to the cycles of this permutation into at most $d$ closed paths. Each such concatenation remains in one $D_x$, and its integral of $\omega=dF_x$ is zero. Therefore
> $$
> \int_\beta\operatorname{tr}_h\omega=\sum_{\text{closed concatenations }\alpha}\int_\alpha\omega=0.
> $$
> There is a single-valued primitive $w$ of the trace on the punctured disk. If $r$ varies, change of variable expresses $w(r)$, up to a constant from the fixed initial endpoints, as a sum of values $F_x(q)$ at the $d$ endpoints over $r$. The boundedness of the finitely many $F_x$ shows $w$ is bounded near $y_0$. The removable singularity theorem extends $w$ holomorphically over $y_0$; its derivative extends $\operatorname{tr}_h\omega$. The number of closed concatenations can equal $d$, for example for a contractible loop; the strict wording in the printed sketch is unnecessary.
>
> **(b) Power-series argument.** On one disk with $r=q^e$, put $\zeta=\mu_e$. Substituting $f(q)=\sum_{n\ge0}a_nq^n$ into the displayed trace expression gives
> $$
> \operatorname{tr}_h\omega
> =\frac1e\sum_{n\ge0}a_n r^{(n+1)/e-1}
> \left(\sum_{i=0}^{e-1}\zeta^{i(n+1)}\right)dr.
> $$
> The inner sum equals $e$ if $e\mid n+1$, and zero otherwise: if $\zeta^{n+1}\ne1$, sum the geometric progression. Write $n=(m+1)e-1$. Since $n\ge0$, every surviving exponent has $m\ge0$, and the trace is exactly
> $$
> \sum_{m\ge0}a_{(m+1)e-1}r^m dr.
> $$
> This series converges on a sufficiently small disk: if $|q|<R$ is a convergence disk of $f$, absolute convergence of its subseries for $|r|<R^e$ justifies the finite root-of-unity sum and rearrangement. There are no negative powers, so the coefficient is holomorphic at zero. If several points lie above $y_0$, sum their finitely many holomorphic contributions. This completes the second proof.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Source issue in the sketch:** A loop has $d$ lifted paths, which need not individually be loops. They concatenate into at most $d$ closed paths, not always fewer than $d$. The solution supplies that interpretation and the necessary shrinking of the disk.
- **Domain clarification:** A root branch near $r_0$ is taken on a sufficiently small disk contained in $h(V)\setminus\{0\}$; the full displayed disk may extend beyond $h(V)$ when $r_0$ is close to its boundary.
- **Inputs:** The local mapping theorem, existence of holomorphic primitives on disks, and the removable singularity theorem are named analytic inputs.
- **Routing:** Traces of differentials and ramification are the main geometric tools.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
