---
title: "Exercise LA542: Prescribed Sizes of Totally Positive Units"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §7, Exercise 6, printed p. 44, PDF p. 63"
created: 2026-10-20
---

# Exercise LA542: Prescribed Sizes of Totally Positive Units

## Problem Statement

> [!question] Neukirch I.7.6
> Let $K$ be a totally real number field, i.e., $X=\operatorname{Hom}(K,\mathbb C)=\operatorname{Hom}(K,\mathbb R)$, and let $T$ be a proper nonempty subset of $X$. Then there exists a unit $\varepsilon$ satisfying $0<\tau\varepsilon<1$ for $\tau\in T$, and $\tau\varepsilon>1$ for $\tau\notin T$.
>
> **Printed hint:** Apply Minkowski's lattice point theorem to the unit lattice in trace-zero space.

## Hints

> [!hint]- Hint 1: Find a direction in the trace-zero hyperplane
> Enumerate the embeddings as $\tau_1,\ldots,\tau_n$ and put $q=|T|$. The vector with coordinates $-(n-q)$ on $T$ and $q$ on its complement has sum zero and exactly the desired strict signs.

> [!hint]- Hint 2: Use a long thin symmetric cylinder
> The logarithms $\lambda(u)=(\log|\tau_i(u)|)_i$ of units form a complete lattice in $H=\{x:\sum_i x_i=0\}$. A sufficiently long symmetric cylinder around the chosen direction has volume large enough for Minkowski. Make its transverse radius small enough that a nonzero lattice point cannot have a small longitudinal coordinate.

> [!hint]- Hint 3: Orient the point and remove actual sign problems
> The cylinder gives the desired logarithmic signs or all their opposites. Replace a unit by its inverse in the latter case. Then square it: logarithmic absolute values control magnitudes, while squaring makes every real embedding value positive.

## Solution

> [!success]- Independent derivation following the Minkowski hint
> Let $n=[K:\mathbb Q]$ and enumerate the real embeddings as $\tau_1,\ldots,\tau_n$. Since $T$ is nonempty and proper, $n\ge2$. Put $q=|T|$, so $1\le q\le n-1$.
>
> **1. State the unit-lattice input.** Define
> $$
> H=\{x\in\mathbb R^n:\textstyle\sum_i x_i=0\},\qquad
> \lambda(u)=(\log|\tau_i(u)|)_{i=1}^n.
> $$
> Every unit has absolute norm $1$, so $\lambda(u)\in H$. By the unit-lattice theorem (7.3),
> $$
> \Lambda=\lambda(\mathcal O_K^\times)
> $$
> is a complete lattice in the Euclidean space $H$ of dimension $d=n-1$. The theorem and its proof are in [S4, Ch. I, §7, printed pp. 40–42, PDF pp. 59–61]. We use completeness and discreteness, rather than assuming that an arbitrary subgroup of $H$ meets every open cone.
>
> **2. Choose a direction and a narrow radius.** Set
> $$
> v_i=\begin{cases}-(n-q),&\tau_i\in T,\\q,&\tau_i\notin T.\end{cases}
> $$
> Its coordinate sum is $-q(n-q)+(n-q)q=0$, so $v\in H$. No coordinate is zero. Put $e=v/\|v\|$ and
> $$
> a=\min_i|e_i|>0.
> $$
> Since $\Lambda$ is discrete, choose $\delta>0$ such that the open ball of radius $\delta$ around $0$ contains no nonzero lattice point. Since $\|e\|=1$, we have $a\le1$. Choose
> $$
> \rho=\frac{\delta a}{4}.
> $$
>
> **3. Apply Minkowski to a cylinder in $H$.** For $L>0$, let
> $$
> C_L=\{te+w:|t|\le L,\ w\in H\cap e^\perp,\ \|w\|\le\rho\}.
> $$
> It is compact, convex, and centrally symmetric. Orthogonal product coordinates give its $d$-dimensional volume as
> $$
> \operatorname{vol}_H(C_L)=2L\kappa_{d-1}\rho^{d-1},
> $$
> where $\kappa_{d-1}>0$ is the volume of the unit ball in the $(d-1)$-dimensional transverse space. When $d=1$, that space is $\{0\}$, its zero-dimensional ball volume is $\kappa_0=1$, and the formula is simply the length $2L$.
>
> The volume tends to infinity with $L$. Choose $L$ so large that $\operatorname{vol}_H(C_L)>2^d\operatorname{covol}_H(\Lambda)$. Minkowski's theorem (4.4) then gives a nonzero lattice point
> $$
> \gamma=te+w\in\Lambda\cap C_L.
> $$
> If $|t|\le\delta/2$, orthogonality and $a\le1$ would give
> $$
> \|\gamma\|^2=t^2+\|w\|^2
> \le\frac{\delta^2}{4}+\frac{\delta^2a^2}{16}
> \le\frac{5\delta^2}{16}<\delta^2,
> $$
> contradicting the choice of $\delta$. Thus $|t|>\delta/2$. For each coordinate,
> $$
> |w_i|\le\|w\|\le\frac{\delta a}{4}
> <|t|a\le|te_i|.
> $$
> Consequently the signs of the coordinates of $\gamma$ agree with those of $te$. Replace $\gamma$ by $-\gamma$ if $t<0$; it remains a lattice point. We have obtained $\gamma_i<0$ on $T$ and $\gamma_i>0$ on its complement.
>
> **4. Lift the logarithms and ensure total positivity.** By the definition of $\Lambda$, choose a unit $u$ with $\lambda(u)=\gamma$. The strict signs give
> $$
> |\tau_i(u)|<1\quad(\tau_i\in T),\qquad
> |\tau_i(u)|>1\quad(\tau_i\notin T).
> $$
> Set $\varepsilon=u^2$. It is a unit, and every real embedding sends it to the positive number $(\tau_i(u))^2$. Hence
> $$
> 0<\tau_i(\varepsilon)<1\quad(\tau_i\in T),\qquad
> \tau_i(\varepsilon)>1\quad(\tau_i\notin T),
> $$
> as required. Squaring preserves all strict inequalities and supplies the positivity that the logarithmic absolute values alone do not encode.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Dirichlets Unit Theorem and Logarithmic Unit Lattices|Dirichlet's Unit Theorem and Logarithmic Unit Lattices]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields|Units in Real Quadratic Fields]]

## Notes

- **Source status:** The complete problem, strict inequalities, and printed hint were checked at [S4, Ch. I, §7, Exercise 6, printed p. 44, PDF p. 63], immediately before the §8 heading. No source figure is needed.
- **Proof inputs:** The complete unit-lattice theorem (7.3) was checked at [S4, printed pp. 40–42, PDF pp. 59–61]. Minkowski's strict lattice point theorem (4.4) is at [printed p. 27, PDF p. 46]. The cylinder construction, volume threshold, coordinate estimates, orientation, and final squaring are independent derivations. Orthogonal product volume and discreteness of a lattice are the elementary Euclidean inputs.
- **Boundary:** The desired sign cone is not centrally symmetric and cannot itself be passed to Minkowski's theorem. The proof instead uses a symmetric cylinder and explicitly rules out nonzero points too close to its central cross-section. The condition on $T$ excludes degree one and supplies positive dimension $d\ge1$. The $d=1$ transverse-volume convention is handled separately in the proof.
- **Routing:** Linear Algebra and Modules is primary because a full lattice in a real hyperplane, orthogonal decomposition, and convex-body volume force the desired logarithmic signs. Unit arithmetic supplies the lattice and the final square.
