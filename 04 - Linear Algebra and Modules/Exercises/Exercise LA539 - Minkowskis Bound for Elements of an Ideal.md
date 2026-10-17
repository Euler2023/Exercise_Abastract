---
title: "Exercise LA539: Minkowski's Bound for Elements of an Ideal"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - neukirch-algebraic-number-theory
  - lattices
  - geometry-of-numbers
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §5, Exercise 3, printed p. 34, PDF p. 53"
created: 2026-10-17
---

# Exercise LA539: Minkowski's Bound for Elements of an Ideal

## Problem Statement

> [!question] Neukirch I.5.3
> Show that in every ideal $\mathfrak a\ne0$ of $\mathcal O_K$ there exists an $a\ne0$ such that
> $$
> |N_{K/\mathbb Q}(a)|\le M(\mathcal O_K:\mathfrak a),
> $$
> where
> $$
> M=\frac{n!}{n^n}\left(\frac4\pi\right)^s\sqrt{|d_K|}
> $$
> (the so-called Minkowski bound).
>
> **Printed hint:** Use exercise 2 to proceed as in (5.3), and make use of the inequality between arithmetic and geometric means,
> $$
> \frac1n\sum_\tau|z_\tau|
> \ge\left(\prod_\tau|z_\tau|\right)^{1/n}.
> $$

Here $n=[K:\mathbb Q]\ge1$, and the signature of $K$ is $(r,s)$: there are $r$ real embeddings and $s$ pairs of nonreal complex-conjugate embeddings, with $n=r+2s$. The sum and product in the printed hint range over all $n$ embeddings, so both members of each complex pair are included. The ideal $\mathfrak a$ is an integral ideal, namely $0\ne\mathfrak a\subseteq\mathcal O_K$.

## Hints

> [!hint]- Hint 1: Use the canonical Minkowski-space volume
> In the source's canonical measure, $j(\mathfrak a)$ is a complete lattice of covolume $C=\sqrt{|d_K|}(\mathcal O_K:\mathfrak a)$. Exercise I.5.2 gives $\operatorname{vol}(X_t)=2^r\pi^s t^n/n!$ for the open body $X_t=\{z:\sum_\tau|z_\tau|<t\}$. Compare this volume with $2^nC$.

> [!hint]- Hint 2: Apply the geometric-mean estimate
> Put $T^n=n!(4/\pi)^sC$. For each $t>T$, Minkowski's theorem gives $0\ne\alpha_t\in\mathfrak a$ with $\sum_\tau|\tau(\alpha_t)|<t$. Arithmetic mean at least geometric mean then gives $|N_{K/\mathbb Q}(\alpha_t)|<(t/n)^n$.

> [!hint]- Hint 3: Justify the non-strict boundary
> The points $\alpha_t$ need not be the same as $t$ decreases. Instead, use that $|N_{K/\mathbb Q}(\alpha)|$ is a positive integer for every $0\ne\alpha\in\mathfrak a$. The nonempty set of these norms has a least element $\mu$. Compare $\mu$ with $(t/n)^n$ for every $t>T$.

## Solution

> [!success]- Independent derivation
> Let $K$ have degree $n=r+2s\ge1$ and signature $(r,s)$, and let $d_K$ be its field discriminant. Fix a nonzero integral ideal $\mathfrak a$ and write
> $$
> A=(\mathcal O_K:\mathfrak a),\qquad
> C=\sqrt{|d_K|}\,A.
> $$
> The index is finite and positive; equivalently, $C$ is the positive covolume supplied by Proposition (5.2).
>
> **1. State the lattice and the geometric inputs.** The Minkowski space is the real vector space
> $$
> K_{\mathbb R}
> =\left\{(z_\tau)_\tau\in\mathbb C^{\operatorname{Hom}(K,\mathbb C)}:
> z_{\overline\tau}=\overline{z_\tau}\right\}
> \cong\mathbb R^r\times\mathbb C^s.
> $$
> It has real dimension $n$. The embedding is
> $$
> j:K\longrightarrow K_{\mathbb R},\qquad
> j(\alpha)=(\tau(\alpha))_\tau.
> $$
> Use the source's canonical Euclidean metric: in the displayed real and complex coordinates its squared norm is $\sum_{i=1}^r x_i^2+2\sum_{j=1}^s|z_j|^2$. Its canonical volume is $2^s$ times ordinary Lebesgue volume on $\mathbb R^r\times\mathbb C^s$.
>
> Proposition (5.2) states that
> $$
> \Gamma=j(\mathfrak a)
> \quad\text{is a complete lattice in }K_{\mathbb R},\qquad
> \operatorname{vol}(\Gamma)=C.
> $$
> Here lattice volume means covolume, the volume of a fundamental parallelepiped. This proposition, including its proof, is in [S4, Ch. I, §5, printed p. 31, PDF p. 50].
>
> Minkowski's lattice point theorem (4.4), proved at [S4, Ch. I, §4, printed p. 27, PDF p. 46], says that a centrally symmetric convex set $Y$ in an $n$-dimensional Euclidean space contains a nonzero point of a complete lattice $\Gamma$ whenever
> $$
> \operatorname{vol}(Y)>2^n\operatorname{vol}(\Gamma).
> $$
> We will apply this strict form to bounded open bodies.
>
> **2. Find the precise strict-volume threshold.** For $t>0$, set
> $$
> S(z)=\sum_\tau|z_\tau|,
> \qquad X_t=\{z\in K_{\mathbb R}:S(z)<t\}.
> $$
> This is an open, hence measurable, set because $S$ is continuous. It is symmetric about $0$ because $S(-z)=S(z)$. For $0\le u\le1$, the triangle inequality gives
> $$
> S((1-u)z+uw)\le(1-u)S(z)+uS(w),
> $$
> which is less than $t$ for $z,w\in X_t$. Thus $X_t$ is convex. It is bounded since every coordinate modulus is less than $t$.
>
> The complete volume calculation in [[04 - Linear Algebra and Modules/Exercises/Exercise LA538 - Volume of a Minkowski Body|Exercise I.5.2]] gives, with this canonical measure,
> $$
> \operatorname{vol}(X_t)=2^r\pi^s\frac{t^n}{n!}.
> $$
> Define the positive number $T$ by
> $$
> T^n=n!\left(\frac4\pi\right)^sC.
> $$
> Since $n-r=2s$, for every $t>T$ we have
> $$
> \begin{aligned}
> \operatorname{vol}(X_t)
> &=2^r\pi^s\frac{t^n}{n!}\\
> &>2^r\pi^s\left(\frac4\pi\right)^sC
> =2^{r+2s}C=2^n\operatorname{vol}(\Gamma).
> \end{aligned}
> $$
> Minkowski's theorem therefore gives $j(\alpha_t)\in X_t\cap\Gamma$ with $\alpha_t\in\mathfrak a\setminus\{0\}$. In particular,
> $$
> \sum_\tau|\tau(\alpha_t)|<t.
> $$
>
> **3. Bound its norm by arithmetic mean at least geometric mean.** For a nonzero element $\alpha\in K$, the field-norm formula is
> $$
> |N_{K/\mathbb Q}(\alpha)|
> =\prod_\tau|\tau(\alpha)|
> =\prod_{i=1}^r|\rho_i(\alpha)|
> \prod_{j=1}^s|\sigma_j(\alpha)|^2.
> $$
> Applying the arithmetic-geometric mean inequality to the $n$ positive numbers $|\tau(\alpha_t)|$, including both members of each conjugate pair, yields
> $$
> |N_{K/\mathbb Q}(\alpha_t)|
> \le\left(\frac1n\sum_\tau|\tau(\alpha_t)|\right)^n
> <\left(\frac tn\right)^n.
> $$
> This has been proved for every $t>T$, possibly with different choices of $\alpha_t$.
>
> **4. Obtain the non-strict endpoint using integer norms.** We use the elementary integrality input that the norm of an algebraic integer is a rational integer. Indeed, embeddings preserve integrality, their finite product is integral, and this product is the field norm in $\mathbb Q$; a rational algebraic integer belongs to $\mathbb Z$. If $\alpha\ne0$, every embedding is injective, so none of the factors is zero. Therefore
> $$
> |N_{K/\mathbb Q}(\alpha)|\in\mathbb Z_{\ge1}
> \qquad(0\ne\alpha\in\mathfrak a\subseteq\mathcal O_K).
> $$
> The set of these positive integers is nonempty because $\mathfrak a\ne0$. By well-ordering, it has a minimum
> $$
> \mu=\min_{0\ne\alpha\in\mathfrak a}|N_{K/\mathbb Q}(\alpha)|,
> $$
> attained by some $\alpha_0\in\mathfrak a\setminus\{0\}$. Step 3 gives $\mu<(t/n)^n$ for every $t>T$.
>
> If $\mu>(T/n)^n$, then $T<n\mu^{1/n}$. Choosing a real number $t$ strictly between these two numbers would give
> $$
> \mu<\left(\frac tn\right)^n<\mu,
> $$
> a contradiction. Hence
> $$
> \begin{aligned}
> |N_{K/\mathbb Q}(\alpha_0)|=\mu
> &\le\left(\frac Tn\right)^n\\
> &=\frac{n!}{n^n}\left(\frac4\pi\right)^s
> \sqrt{|d_K|}(\mathcal O_K:\mathfrak a)
> =M(\mathcal O_K:\mathfrak a).
> \end{aligned}
> $$
> This is the required bound. No assertion that the varying elements $\alpha_t$ converge has been used.

## Related Concepts

- [[04 - Linear Algebra and Modules/Exercises/Exercise LA538 - Volume of a Minkowski Body|Exercise LA538: Volume of a Minkowski Body]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[02 - Ring Theory/Concepts/Orders and Conductors|Orders and Conductors]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]

## Notes

- **Source verification:** The full problem, the non-strict symbol $\le$, the constant $\frac{n!}{n^n}(\frac4\pi)^s\sqrt{|d_K|}$, and the complete printed hint were checked at [S4, Ch. I, §5, Exercise 3, printed p. 34, PDF p. 53]. No source figure is needed.
- **Proof status and inputs:** This is an independent derivation following the printed hint. It imports the complete ideal-lattice and covolume proposition (5.2), printed p. 31 / PDF p. 50; the strict Minkowski theorem (4.4), printed p. 27 / PDF p. 46; the separately proved volume calculation of Exercise I.5.2; the arithmetic-geometric mean inequality; and the elementary algebraic-integer norm fact explained in Step 4. The source identifies the coordinate product with the field norm on printed pp. 32–33 / PDF pp. 51–52. The canonical measure factor $2^s$ was checked on printed p. 31 / PDF p. 50.
- **Endpoint audit:** Strict Minkowski gives an element only for $t>T$, and strict bounds on the open body's coordinate sum. It does not directly give an element at $t=T$. The minimum of the nonempty positive-integer norm set supplies the final $\le$ without a change-of-quantifiers gap, a convergence assumption on varying elements, or a class-number theorem. This argument does not require the set of ideal elements or the set of their norms to be finite.
- **Degree-one equality:** For $K=\mathbb Q$, one has $n=1$, $s=0$, $d_K=1$, and $M=1$. If $\mathfrak a=m\mathbb Z$ with $m\ge1$, its index is $m$ and $\alpha=m$ attains $|N(\alpha)|=m$. Every nonzero element of the ideal has absolute value at least $m$. Thus equality really occurs, and a strict bound with the same constant would be false even in degree one.
- **Normalization boundary:** The sum over embeddings counts a complex modulus twice. With ordinary Lebesgue measure on $\mathbb R^r\times\mathbb C^s$, the same lattice has covolume $2^{-s}\sqrt{|d_K|}A$ and the body has volume $2^{r-s}\pi^s t^n/n!$; both normalizations give the same threshold $T$. Mixing the canonical body volume with the Lebesgue lattice covolume would change the constant incorrectly.
- **Routing:** Linear Algebra and Modules is primary because the proof compares a convex body's volume with the covolume of an embedded ideal lattice and then applies a geometric-mean estimate. Algebraic integrality supplies the final discrete endpoint step.
