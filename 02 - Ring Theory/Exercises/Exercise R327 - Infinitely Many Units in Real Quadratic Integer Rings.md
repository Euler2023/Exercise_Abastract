---
title: "Exercise R327: Infinitely Many Units in Real Quadratic Integer Rings"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §1, Exercise 6, printed p. 5, PDF p. 24"
created: 2026-09-29
---

# Exercise R327: Infinitely Many Units in Real Quadratic Integer Rings

## Problem Statement

> [!question] Neukirch I.1.6
> Show that the ring $\mathbb Z[\sqrt d]=\mathbb Z+\mathbb Z\sqrt d$, for any squarefree rational integer $d>1$, has infinitely many units.

## Hints

> [!hint]- Hint 1
> Use the pigeonhole principle on the fractional parts of $0,\sqrt d,2\sqrt d,\ldots,Q\sqrt d$ to find integers $m,n$ with $1\leq n\leq Q$ and $0<\lvert m-n\sqrt d\rvert<1/Q$. What bound does this give for the nonzero integer $m^2-dn^2$?

> [!hint]- Hint 2
> Find infinitely many distinct elements $\alpha_i=m_i+n_i\sqrt d$ with the same nonzero norm $c$ and the same two coefficient residues modulo $\lvert c\rvert$. For a fixed member $\alpha_0$, check directly that $\alpha_i/\alpha_0=\alpha_i\overline{\alpha_0}/c$ lies in the ring and has norm $1$.

## Solution

> [!success]- Independent derivation
> Put $\theta=\sqrt d$ and $R=\mathbb Z[\theta]$. Since $d>1$ is squarefree, $\theta$ is irrational. Conjugation sends $a+b\theta$ to $a-b\theta$, and the norm is
>
> $$
> N(a+b\theta)=(a+b\theta)(a-b\theta)=a^2-db^2.
> $$
>
> It is a multiplicative, integer-valued function and is nonzero on every nonzero element of $R$. An element $\alpha\in R$ is a unit precisely when $N(\alpha)=\pm1$: necessity follows by taking norms of $\alpha\alpha^{-1}=1$, and sufficiency follows from $\alpha^{-1}=\overline\alpha/N(\alpha)\in R$.
>
> **1. Infinitely many elements with bounded nonzero norm.** Let $Q$ be any positive integer. Divide $[0,1)$ into $Q$ half-open intervals of length $1/Q$. Two of the $Q+1$ fractional parts of $j\theta$, for $0\leq j\leq Q$, lie in the same interval. Subtracting the corresponding multiples of $\theta$ gives integers $m,n$ such that
>
> $$
> 1\leq n\leq Q,
> \qquad
> 0<\lvert m-n\theta\rvert<\frac1Q.
> $$
>
> The error cannot be zero because $\theta$ is irrational. Also $m>n\theta-1/Q\geq\theta-1>0$. Thus $\alpha=m+n\theta>0$ and
>
> $$
> \begin{aligned}
> 0<\lvert N(\alpha)\rvert
> &=\lvert m-n\theta\rvert(m+n\theta)\\
> &<\frac1Q\left(2n\theta+\frac1Q\right)
> \leq 2\theta+\frac1{Q^2}
> \leq2\theta+1.
> \end{aligned}
> $$
>
> The pairs $(m,n)$ obtained as $Q$ varies form an infinite set. Otherwise their finitely many positive errors $\lvert m-n\theta\rvert$ would have a positive minimum, contradicting the bound $1/Q$ for arbitrarily large $Q$. Irrationality of $\theta$ implies that distinct pairs give distinct elements of $R$.
>
> **2. Arrange a common norm and congruence class.** All these norms are nonzero integers of absolute value less than the fixed real number $2\theta+1$. There are only finitely many possible values, so an infinite subset has one common norm $c\in\mathbb Z\setminus\{0\}$. There are only $\lvert c\rvert^2$ pairs of coefficient residues modulo $\lvert c\rvert$. Passing to another infinite subset, write its distinct elements as
>
> $$
> \alpha_i=m_i+n_i\theta,
> \qquad
> N(\alpha_i)=c,
> \qquad
> m_i\equiv m_0,\quad n_i\equiv n_0\pmod{\lvert c\rvert}.
> $$
>
> Choose one member $\alpha_0=m_0+n_0\theta$ as a reference.
>
> **3. Take quotients inside the ring.** For every member of this subset,
>
> $$
> \frac{\alpha_i}{\alpha_0}
> =\frac{\alpha_i\overline{\alpha_0}}c
> =\frac{m_i m_0-dn_i n_0}{c}
> +\frac{n_i m_0-m_i n_0}{c}\theta.
> $$
>
> Both coefficients are integers. Indeed, modulo $\lvert c\rvert$, their numerators are respectively
>
> $$
> m_0^2-dn_0^2=c\equiv0
> \qquad\text{and}\qquad
> n_0m_0-m_0n_0=0.
> $$
>
> Consequently $u_i=\alpha_i/\alpha_0$ lies in $R$ and
>
> $$
> N(u_i)=\frac{N(\alpha_i)}{N(\alpha_0)}=1.
> $$
>
> Each $u_i$ is therefore a unit, with inverse $\overline{u_i}\in R$. Division by the fixed nonzero element $\alpha_0$ is injective, so these units are distinct. Hence $R^\times$ is infinite.

## Related Concepts

- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers]]

## Notes

- **Source and proof status.** The complete exercise was checked directly against the rendered page [S4, Ch. I, §1, Exercise 6, printed p. 5, PDF p. 24]. The pigeonhole and congruence proof above is an independent derivation; the source page poses the problem rather than supplying this proof. No source error was found.
- **Scope of the ring.** The statement concerns precisely $\mathbb Z[\sqrt d]$. For squarefree $d\equiv1\pmod4$, this is a proper subring of the full ring of integers of $\mathbb Q(\sqrt d)$. The construction produces units and their inverses in the smaller ring itself; it does not merely produce units in the full ring of integers.
- **Method boundary.** Neither Dirichlet's unit theorem nor the existence theorem for solutions of Pell's equation is imported. The proof actually constructs infinitely many norm-one units and uses only the pigeonhole principle, integer congruences, and the explicit quadratic norm.
- **Routing.** Unit criteria, multiplicative norms, and divisibility of coefficients do the main work, so this note belongs to Ring Theory. The field-theoretic context is linked above.
