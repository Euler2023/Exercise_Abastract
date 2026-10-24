---
title: "Exercise LA538: Volume of a Minkowski Body"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - neukirch-algebraic-number-theory
  - minkowski-space
  - canonical-measure
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §5, Exercise 2, printed p. 34, PDF p. 53"
created: 2026-10-17
---

# Exercise LA538: Volume of a Minkowski Body

## Problem Statement

> [!question] Neukirch I.5.2
> Show that the convex, centrally symmetric set
> $$
> X=\left\{(z_\tau)\in K_{\mathbb R}:\sum_\tau|z_\tau|<t\right\}
> $$
> has volume $\operatorname{vol}(X)=2^r\pi^s\dfrac{t^n}{n!}$ (see chap. III, (2.15)).

Here $K$ is a number field of degree $n\ge1$ with $r$ real embeddings and $s$ pairs of nonreal complex embeddings, so $n=r+2s$. The sum runs over **all** $n$ embeddings, including both members of each complex-conjugate pair. Volume means the source's **canonical measure** on $K_{\mathbb R}$.

> [!warning] Source wording: the range of $t$ is not stated
> The printed exercise does not specify $t>0$. Its formula is correct for $t\ge0$, with the positive case understood in the intended region-volume calculation. If $t<0$, the region is empty while the displayed polynomial in $t$ is nonzero. We preserve the printed statement above and prove its positive-parameter interpretation below. For arbitrary real $t$, the precise result is
> $$
> \operatorname{vol}(X)=
> \begin{cases}
> \displaystyle\frac{2^r\pi^s}{n!}t^n,&t>0,\\
> 0,&t\le0.
> \end{cases}
> $$
> At $t=0$, the region is empty because its defining inequality is strict, and the printed formula also gives zero.

## Hints

> [!hint]- Hint 1: Keep the canonical metric normalization
> Retain the $r$ real coordinates and one complex coordinate $w_j$ from each conjugate pair. In ordinary real and imaginary coordinates, the canonical metric has diagonal matrix $\operatorname{diag}(1,\ldots,1,2,\ldots,2)$, with $2s$ entries equal to $2$. Its volume density relative to standard Lebesgue measure is therefore $2^s$.

> [!hint]- Hint 2: Use signs, polar coordinates, and a radial substitution
> Write $u_i=|x_i|$ for real coordinates and $w_j=\rho_je^{i\theta_j}$ for complex coordinates. The defining condition becomes $\sum_i u_i+2\sum_j\rho_j<t$. The polar volume element contains $\prod_j\rho_j$. Then substitute $v_j=2\rho_j$ and keep track of $\rho_j\,d\rho_j=v_j\,dv_j/4$.

> [!hint]- Hint 3: Interpret the weighted integral as a simplex volume
> Show that
> $$
> \int_{\substack{u_i,v_j\ge0\\\sum_i u_i+\sum_jv_j<t}}
> \prod_{j=1}^s v_j\,du\,dv
> =\frac{t^{r+2s}}{(r+2s)!}.
> $$
> For each $v_j$, introduce nonnegative coordinates $a_j,b_j$ with $v_j=a_j+b_j$. After changing variables to $(v_j,a_j)$, integration over $0\le a_j\le v_j$ contributes the factor $v_j$. What is the volume of the resulting $n$-dimensional simplex?

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation by elementary integration
>
> Let $n=r+2s\ge1$. We first assume $t>0$ and calculate with the canonical metric and measure. The cases $t\le0$ will be handled separately.
>
> ### 1. Express the canonical measure in real coordinates
> Enumerate the real embeddings as $\rho_1,\ldots,\rho_r$ and choose one embedding $\sigma_j$ from each of the $s$ conjugate pairs. A point of $K_{\mathbb R}$ has real coordinates $x_i=z_{\rho_i}$ and complex coordinates $w_j=z_{\sigma_j}$, with
> $$
> z_{\overline\sigma_j}=\overline{w_j}.
> $$
> Thus retaining $(x_1,\ldots,x_r,w_1,\ldots,w_s)$ identifies the underlying real vector space with $\mathbb R^r\times\mathbb C^s$. This coordinate identification is not an isometry to the standard unweighted product metric.
>
> The canonical metric is the restriction of the sum over all embedding coordinates. Its squared norm is
> $$
> \langle z,z\rangle
> =\sum_{i=1}^r x_i^2
>   +2\sum_{j=1}^s|w_j|^2.
> $$
> Writing $w_j=\xi_j+i\eta_j$, the real-coordinate Gram matrix has $r$ diagonal entries $1$ and $2s$ diagonal entries $2$. Its determinant is $2^{2s}$, so the Euclidean volume density for this metric is $\sqrt{2^{2s}}=2^s$. Consequently
> $$
> d\operatorname{vol}_{\mathrm{can}}
> =2^s\,dx_1\cdots dx_r
>       \prod_{j=1}^s d\xi_j\,d\eta_j.
> $$
> This is the canonical-to-Lebesgue normalization in the source.
>
> ### 2. Account for both members of each complex pair
> Since $|w_j|=|\overline{w_j}|$, the defining sum is
> $$
> \sum_\tau|z_\tau|
> =\sum_{i=1}^r|x_i|+2\sum_{j=1}^s|w_j|.
> $$
> Therefore $X$ corresponds to the region
> $$
> \sum_{i=1}^r|x_i|+2\sum_{j=1}^s|w_j|<t.
> $$
> It is bounded and open, hence measurable. Negating every coordinate preserves the inequality, giving central symmetry. The triangle inequality in each real or complex coordinate shows that a convex combination of two points still satisfies the strict bound, so the region is convex.
>
> Set $u_i=|x_i|\ge0$ and use polar coordinates $w_j=\rho_je^{i\theta_j}$, where $\rho_j\ge0$ and $0\le\theta_j<2\pi$. The $2^r$ choices of signs of the real coordinates give equal contributions; their overlaps on coordinate hyperplanes have measure zero. For each complex coordinate,
> $$
> d\xi_j\,d\eta_j=\rho_j\,d\rho_j\,d\theta_j.
> $$
> Integration over all angles gives $(2\pi)^s$. Including the canonical density from Step 1, we obtain
> $$
> \operatorname{vol}(X)
> =2^s2^r(2\pi)^s
> \int_{\substack{u_i,\rho_j\ge0\\
>                   \sum_i u_i+2\sum_j\rho_j<t}}
>       \prod_{j=1}^s\rho_j\,du\,d\rho.
> $$
> Here $du=du_1\cdots du_r$ and $d\rho=d\rho_1\cdots d\rho_s$, with empty products interpreted as $1$ when $r=0$ or $s=0$.
>
> ### 3. Reduce to a weighted simplex integral
> Put $v_j=2\rho_j$. For every complex pair,
> $$
> \rho_j\,d\rho_j=\frac{v_j\,dv_j}{4}.
> $$
> The constraint becomes $\sum_i u_i+\sum_jv_j<t$, and the constant simplifies to
> $$
> 2^s2^r(2\pi)^s4^{-s}=2^r\pi^s.
> $$
> Thus
> $$
> \operatorname{vol}(X)=2^r\pi^s J_{r,s}(t),
> \qquad
> J_{r,s}(t)=
> \int_{\substack{u_i,v_j\ge0\\
>                   \sum_i u_i+\sum_jv_j<t}}
>       \prod_{j=1}^s v_j\,du\,dv.
> $$
>
> ### 4. Evaluate the weighted integral without a general simplex formula
> Consider the ordinary $n$-dimensional simplex, with $n=r+2s$,
> $$
> \Delta_n(t)=
> \left\{(u_1,\ldots,u_r,a_1,b_1,\ldots,a_s,b_s):
> \begin{array}{l}
> u_i,a_j,b_j\ge0,\\
> \sum_i u_i+\sum_j(a_j+b_j)<t
> \end{array}\right\}.
> $$
> For each pair, change variables from $(a_j,b_j)$ to $(v_j,a_j)$, where $v_j=a_j+b_j$. The absolute Jacobian is $1$, and the nonnegative quadrant becomes $v_j\ge0$, $0\le a_j\le v_j$. Fubini's theorem then gives
> $$
> \begin{aligned}
> \operatorname{vol}_{\mathrm{Leb}}(\Delta_n(t))
> &=\int_{\substack{u_i,v_j\ge0\\
>                    \sum_i u_i+\sum_jv_j<t}}
>       \left(\prod_{j=1}^s\int_0^{v_j} da_j\right)du\,dv\\
> &=J_{r,s}(t).
> \end{aligned}
> $$
> It remains to calculate an ordinary simplex volume. Let $V_N(t)$ be the Lebesgue volume of
> $$
> \{(q_1,\ldots,q_N)\in\mathbb R_{\ge0}^N:
>        q_1+\cdots+q_N<t\}.
> $$
> For $N=1$, this interval has length $V_1(t)=t$. If $N\ge2$ and the formula is known in dimension $N-1$, integration in the first coordinate gives
> $$
> V_N(t)=\int_0^t V_{N-1}(t-q_1)\,dq_1
> =\int_0^t\frac{(t-q_1)^{N-1}}{(N-1)!}\,dq_1
> =\frac{t^N}{N!}.
> $$
> Hence $J_{r,s}(t)=V_n(t)=t^n/n!$. Substitution into Step 3 yields
> $$
> \operatorname{vol}(X)=2^r\pi^s\frac{t^n}{n!}
> \qquad(t>0),
> $$
> as required in the intended positive range.
>
> ### 5. Settle the parameter boundary
> For $t\le0$, the nonnegative sum $\sum_\tau|z_\tau|$ cannot be strictly smaller than $t$. Thus $X=\varnothing$ and its volume is zero. For $t=0$ this agrees with the printed expression because $n\ge1$; for $t<0$ the expression is nonzero and cannot equal the volume. Equivalently, for every real $t$ one can write
> $$
> \operatorname{vol}(X)
> =\frac{2^r\pi^s}{n!}\bigl(\max\{t,0\}\bigr)^n.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source verification:** The complete exercise, including the sum over all embedding coordinates and the parenthetical reference to Chapter III (2.15), was visually checked in [S4, Ch. I, §5, Exercise 2, printed p. 34, PDF p. 53]. The exercise precedes the §6 heading and belongs to §5. No source figure is required.
- **Source inputs:** The definition of $K_{\mathbb R}$, its canonical metric, and canonical measure was checked at [S4, Ch. I, §5, printed p. 29, PDF p. 48]. The real/complex coordinate description, signature $n=r+2s$, and the weights $1$ and $2$ were checked in Proposition (5.1), printed pp. 30–31 / PDF pp. 49–50; the explicit normalization $\operatorname{vol}_{\mathrm{canonical}}=2^s\operatorname{vol}_{\mathrm{Lebesgue}}$ is on printed p. 31 / PDF p. 50.
- **Proof status and inputs:** The integration and the simplex evaluation above are independent derivations. Their calculus inputs are change of variables in Euclidean volume, the planar polar-coordinate Jacobian, and Fubini's theorem for the resulting nonnegative bounded-region integrals. The printed pointer to III (2.15) is preserved as source text but is not used as a proof input or presented as having been checked here.
- **Normalization check:** If $r=0$ and $s=1$, then $n=2$ and $X$ is the disk $|w|<t/2$. Its ordinary area is $\pi t^2/4$, and its canonical volume is twice that, namely $\pi t^2/2$, agreeing with the formula. Both the factor $2$ in the embedding sum and the canonical density are essential.
- **Source scope:** The source does not print a condition on $t$. The visible callout records this omission, retains the printed formula, and states the complete real-parameter version. The proof uses $t>0$ until its final boundary step.
- **Routing:** Linear Algebra and Modules is primary because the task is a volume computation in a finite-dimensional Euclidean space, with a metric-dependent measure and explicit coordinate changes. The number-field embeddings determine the coordinate multiplicities; no ideal-factorization argument or lattice-point existence theorem is needed for this calculation.

