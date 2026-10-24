---
title: "Exercise LA537: A Uniform Embedding Bound for Elements of an Ideal"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - neukirch-algebraic-number-theory
  - lattices
  - geometry-of-numbers
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §5, Exercise 1, printed p. 34, PDF p. 53"
created: 2026-10-17
---

# Exercise LA537: A Uniform Embedding Bound for Elements of an Ideal

## Problem Statement

> [!question] Neukirch I.5.1 — A Uniform Embedding Bound
> Write down a constant $A$ which depends only on $K$ such that every integral ideal $\mathfrak a\ne0$ of $K$ contains an element $a\ne0$ satisfying
> $$
> |\tau a|<A(\mathcal O_K:\mathfrak a)^{1/n}
> \quad\text{for all }\tau\in\operatorname{Hom}(K,\mathbb C),
> \qquad n=[K:\mathbb Q].
> $$

## Hints

> [!hint]- Hint 1: Use the same bound at every embedding
> In Theorem (5.3), put $c_\tau=A(\mathcal O_K:\mathfrak a)^{1/n}$ for every embedding. There are $n$ embeddings, including both members of each complex conjugate pair.

> [!hint]- Hint 2: Reduce the hypothesis to a condition on $A$
> Write $s$ for the number of complex conjugate pairs and $d_K$ for the field discriminant. The product condition becomes $A^n>(2/\pi)^s\sqrt{|d_K|}$ after cancelling the positive ideal index.

> [!hint]- Hint 3: Leave room for the strict inequality
> Multiply the positive $n$th root of $(2/\pi)^s\sqrt{|d_K|}$ by $2$. This gives a constant independent of the ideal.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $K$ be a number field of degree $n\ge1$ and signature $(r,s)$, so it has $r$ real embeddings and $s$ conjugate pairs of nonreal embeddings, with $n=r+2s$. Let $d_K\ne0$ be the discriminant of its ring of integers. Set
> $$
> \Lambda_K=\left(\frac2\pi\right)^s\sqrt{|d_K|},
> \qquad
> A=2\Lambda_K^{1/n}.
> $$
> This is positive and depends only on $K$.
>
> **Source input: Theorem (5.3).** If $\mathfrak a\subseteq\mathcal O_K$ is a nonzero integral ideal and positive real numbers $c_\tau$ satisfy $c_\tau=c_{\bar\tau}$ and
> $$
> \prod_{\tau\in\operatorname{Hom}(K,\mathbb C)}c_\tau
> >\Lambda_K(\mathcal O_K:\mathfrak a),
> $$
> then there is $a\in\mathfrak a\setminus\{0\}$ such that $|\tau a|<c_\tau$ for every embedding. This is the source's application of Minkowski's lattice point theorem to the ideal lattice in Minkowski space.
>
> Fix any such ideal and put $q=(\mathcal O_K:\mathfrak a)$. This index is a finite positive integer. Choose
> $$
> c_\tau=Aq^{1/n}
> \quad\text{for every }\tau\in\operatorname{Hom}(K,\mathbb C).
> $$
> All the bounds are positive and equal, so in particular they agree on conjugate embeddings. Since the product has exactly $n$ factors,
> $$
> \prod_\tau c_\tau
> =(Aq^{1/n})^n
> =A^nq
> =2^n\Lambda_Kq
> >\Lambda_Kq.
> $$
> The final inequality uses $n\ge1$ and $\Lambda_Kq>0$. All hypotheses of Theorem (5.3) hold. It yields a single nonzero element $a\in\mathfrak a$ satisfying, simultaneously,
> $$
> |\tau a|<Aq^{1/n}
> =A(\mathcal O_K:\mathfrak a)^{1/n}
> \quad\text{for every }\tau.
> $$
> The chosen $A$ works for every nonzero integral ideal, as required. More generally, any $A>\Lambda_K^{1/n}$ works by the same argument.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[02 - Ring Theory/Concepts/Orders and Conductors|Orders, Integral Bases, and Discriminants]]

## Notes

- **Source verification:** The complete numbered exercise was visually checked in [S4, Ch. I, §5, Exercise 1, printed p. 34, PDF p. 53]. All three exercises of §5 precede the §6 body heading on that page. No source figure is required.
- **Source input and proof status:** This is an independent application of [S4, Ch. I, §5, Theorem (5.3) and its proof, printed p. 32, PDF p. 51], whose hypotheses and conclusion are stated in the solution. The source proves that theorem using the ideal-lattice covolume formula (5.2), printed p. 31 / PDF p. 50, and Minkowski's theorem (4.4). Those results are imported here rather than reproved. The signature convention was checked in (5.1), printed p. 30 / PDF p. 49.
- **Strictness and choice of constant:** The factor $2$ is convenient rather than optimal. The theorem's strict product hypothesis is satisfied explicitly. Its threshold root alone cannot give the printed strict bounds uniformly: for $K=\mathbb Q$, $\Lambda_K=1$ and $\mathfrak a=m\mathbb Z$ with $m\ge1$, every nonzero element has absolute value at least $m$.
- **Routing:** The main step is a simultaneous small-vector bound in the Minkowski embedding, with the ideal index entering through lattice covolume. Linear Algebra and Modules is therefore primary; number-field discriminants and integral ideals are cross-topic inputs.
