---
title: "Exercise R335: A Half-Integral Basis for a Cubic Number Field"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
  - algebraic-integers
  - integral-bases
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §2, Exercise 6, printed p. 15, PDF p. 34"
created: 2026-10-11
---

# Exercise R335: A Half-Integral Basis for a Cubic Number Field

## Problem Statement

> [!question] Neukirch I.2.6
> Show that $\{1,\theta,\tfrac12(\theta+\theta^2)\}$ is an integral basis of $\mathbb Q(\theta)$, $\theta^3-\theta-4=0$.

## Hints

> [!hint]- Hint 1: Prove that the half-integral expression is integral
> Put $\beta=(\theta+\theta^2)/2$. Compute $\theta\beta$ and $\beta^2$ using $\theta^3=\theta+4$, and then obtain a monic integer polynomial satisfied by $\beta$.

> [!hint]- Hint 2: Compute the trace discriminant
> The traces of $1,\theta,\theta^2$ are $3,0,2$. Use the multiplication formulas to calculate the trace matrix for $1,\theta,\beta$; its determinant is $-107$.

> [!hint]- Hint 3: A square-free order discriminant
> For an integral order $R\subseteq\mathcal O_K$ of finite index $m$, changing an integer basis in the trace pairing gives $\operatorname{disc}(R)=m^2d_K$. Expand the finite-lattice argument rather than assuming that $\theta$ itself gives a power integral basis.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $f(T)=T^3-T-4$, $K=\mathbb Q(\theta)$, and $f(\theta)=0$. Modulo $3$, $f$ becomes $T^3-T-1$, which has value $-1$ at every element of $\mathbb F_3$. A cubic without a root over a field is irreducible. The monic reduction criterion, which follows from Gauss's lemma, therefore proves that $f$ is irreducible over $\mathbb Q$. Hence $[K:\mathbb Q]=3$; also $\theta$ is integral because $f$ is monic.
>
> **1. An integral order with the proposed basis.** Put
> $$
> \beta=\frac{\theta+\theta^2}{2}.
> $$
> The equation $\theta^3=\theta+4$ gives $\theta^4=\theta^2+4\theta$, and consequently
> $$
> \theta^2=2\beta-\theta,\qquad
> \theta\beta=\beta+2,\qquad
> \beta^2=\beta+\theta+2.
> $$
> In particular,
> $$
> \beta^3=\beta^2+\theta\beta+2\beta
> =4\beta+\theta+4
> =\beta^2+3\beta+2.
> $$
> Thus $\beta$ satisfies the monic polynomial
> $$
> T^3-T^2-3T-2\in\mathbb Z[T]
> $$
> and is integral. The multiplication formulas show that
> $$
> R=\mathbb Z\oplus\mathbb Z\theta\oplus\mathbb Z\beta
> $$
> is a subring of $\mathcal O_K$. The three proposed elements are rationally independent, since $\beta=(\theta+\theta^2)/2$ and $1,\theta,\theta^2$ are a rational basis. Therefore $R$ is an order in $K$.
>
> **2. The trace discriminant.** Write $\operatorname{Tr}=\operatorname{Tr}_{K/\mathbb Q}$. Vieta's formulas give
> $$
> \operatorname{Tr}(1)=3,\qquad
> \operatorname{Tr}(\theta)=0,\qquad
> \operatorname{Tr}(\theta^2)=2.
> $$
> Hence $\operatorname{Tr}(\beta)=1$. The multiplication formulas further give
> $$
> \operatorname{Tr}(\theta\beta)=1+6=7,
> \qquad \operatorname{Tr}(\beta^2)=1+0+6=7.
> $$
> The trace matrix for $1,\theta,\beta$ and its determinant are
> $$
> G=\begin{pmatrix}
> 3&0&1\\
> 0&2&7\\
> 1&7&7
> \end{pmatrix},\qquad
> \operatorname{disc}(R)=\det G=3(14-49)-2=-107.
> $$
> The positive integer $107$ is prime: none of $2,3,5,7$, the primes at most $\sqrt{107}$, divides it.
>
> **3. Prove maximality, including the finite-index step.** If $z\in\mathcal O_K$, then $z$, $z\theta$, and $z\beta$ are integral, and all three traces are integers. Write $z=x_0+x_1\theta+x_2\beta$ with rational coordinates. These traces form the vector
> $$
> G\begin{pmatrix}x_0\\x_1\\x_2\end{pmatrix}\in\mathbb Z^3.
> $$
> Since $G^{-1}=\operatorname{adj}(G)/\det G$ and $\operatorname{adj}(G)$ has integer entries, all coordinates lie in $\tfrac1{107}\mathbb Z$. Therefore
> $$
> R\subseteq\mathcal O_K\subseteq\frac1{107}R.
> $$
> A subgroup of a finitely generated free abelian group is free. The inclusions show that $\mathcal O_K$ is free of rank $3$, and that $m=[\mathcal O_K:R]$ is finite.
>
> Choose an integer basis $\omega_1,\omega_2,\omega_3$ of $\mathcal O_K$. The coordinate matrix $T$ expressing $1,\theta,\beta$ in this basis has integer entries and $|\det T|=m$, by the determinant formula for the index of a full integer sublattice. The trace matrix changes by $G=T^{\mathsf T}G_{\mathcal O_K}T$, so
> $$
> -107=\operatorname{disc}(R)=m^2d_K.
> $$
> Each entry of $G_{\mathcal O_K}$ is an integer, since it is the trace of an integral element. Hence $d_K\in\mathbb Z$ and $m^2$ divides $107$. Because $107$ is square-free, $m=1$. We have proved
> $$
> \mathcal O_K=\mathbb Z\oplus\mathbb Z\theta
> \oplus\mathbb Z\frac{\theta+\theta^2}{2},
> \qquad d_K=-107.
> $$
>
> **4. The distinction between two generators.** Since $\theta^2=2\beta-\theta$, the original power order $\mathbb Z[\theta]$ has basis $1,\theta,2\beta$ and index $2$ in $\mathcal O_K$. Thus $1,\theta,\theta^2$ are not an integral basis. Nevertheless, $\theta=\beta^2-\beta-2$, so
> $$
> \mathcal O_K=\mathbb Z[\beta].
> $$
> Indeed the two inclusions follow from $\beta\in\mathcal O_K$ and $\theta\in\mathbb Z[\beta]$. The change from $1,\theta,\beta$ to $1,\beta,\beta^2$ has integer inverse by $\beta^2=\beta+\theta+2$. Thus this field has a power integral basis after changing the generator.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Orders and Conductors|Orders and Conductors]]
- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[03 - Field Theory/Concepts/Primitive Elements|Primitive Elements]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]

## Notes

- **Source verification:** [S4, Ch. I, §2, Exercise 6, printed p. 15, PDF p. 34]. The proposed basis and the equation $\theta^3-\theta-4=0$ were checked against a rendered original PDF page. No source figure is needed.
- **Proof status:** The exercise statement is in Neukirch; the polynomial for $\beta$, multiplication table, trace matrix, maximality argument, and alternative power basis above are independent derivations. The finite-index discriminant identity is also stated as Proposition 2.12 on the exercise page; its basis-change calculation is expanded here.
- **Inputs and proof scope:** The proof imports Gauss's lemma, closure of algebraic integers under sums and products, integrality of their traces, the subgroup theorem for finite-rank free abelian groups, and the determinant formula for a full integer-lattice index. The trace-coordinate bound proves finite index rather than presupposing it, and the square-free discriminant step is proved in the solution.
- **Notation and method boundary:** A primitive integral field generator need not generate the full integer ring. Here $\mathbb Z[\theta]$ is a proper order, but $\mathbb Z[\beta]$ is the full integer ring. This cubic differs from the nonmonogenic cubic in [[02 - Ring Theory/Exercises/Exercise R329 - A Counterexample to Prescribed Coprime Conductors|Exercise R329]]; the common lattice method does not identify their fields or imply the same monogeneity behavior.
- **Routing:** Ring Theory is primary because the problem determines an integral closure through an integral order and its discriminant. The rational basis, trace matrix, and lattice index are supporting linear algebra tools.
