---
title: 'Exercise LA548: Totally Positive Units with Prescribed Magnitudes'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 2, printed p. 193, PDF p. 212
source_refs:
- S4/ch-III/sec-1/ex-2
created: '2026-10-23'
---

# Exercise LA548: Totally Positive Units with Prescribed Magnitudes

## Problem Statement

> [!question] Neukirch III.1.2
> Let $K$ be totally real, i.e., $K_{\mathfrak p}=\mathbb R$ for all $\mathfrak p\mid\infty$. Let $T$ be a proper nonempty subset of $\operatorname{Hom}(K,\mathbb R)$. Then there exists a unit $\varepsilon$ of $K$ satisfying $\tau\varepsilon>1$ for $\tau\in S$ and $0<\tau\varepsilon<1$ for $\tau\notin S$.

> [!warning] Source issue
> The book first defines the subset $T$, but then uses the undefined symbol $S$ in its conclusion. The printed statement is retained here; the solution interprets $S$ as $T$. This is a correction of notation and must not be silently incorporated into a supposedly consistent transcription.

## Hints

> [!hint]- Hint 1
> Interpret the subset consistently as $T$. The logarithms of units form a full lattice in $H=\{(x_\tau):\sum x_\tau=0\}$.

> [!hint]- Hint 2
> Choose a vector $v$ whose coordinates sum to zero, are strictly positive on $T$, and are strictly negative on its complement. Scale it to $Nv$, then use a bounded fundamental domain to find a lattice point at bounded distance from $Nv$.

> [!hint]- Hint 3
> Square the resulting unit to make every real embedding positive without changing the strict signs of its logarithmic coordinates.

## Solution

> [!success]- Independent derivation
> Set $S=T$ as explained in the warning. Write $n=[K:\mathbb Q]$ and $q=|T|$; then $1\le q\le n-1$. Define
> $$
> v_\tau=\begin{cases}n-q,&\tau\in T,\\-q,&\tau\notin T.\end{cases}
> $$
> Then $\sum_\tau v_\tau=q(n-q)-(n-q)q=0$. Dirichlet's unit lattice theorem says that
> $$
> \Lambda=\{(\log|\tau u|)_\tau:u\in\mathcal O_K^\times\}\subset H
> $$
> is a full lattice. This input and its interpretation in the trace-zero hyperplane are restated in [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, (1.11), printed p. 191, PDF p. 210]. Choose a bounded fundamental parallelepiped for $\Lambda$ and choose $C$ so that the absolute value of every coordinate of every point in it is less than $C$. Thus, for every real number $N>0$, there is $\lambda_N\in\Lambda$ satisfying
> $$
> |(\lambda_N)_\tau-Nv_\tau|<C\quad\text{for all }\tau.
> $$
> Choose $N\min(q,n-q)>C$. Then $(\lambda_N)_\tau>0$ on $T$ and $(\lambda_N)_\tau<0$ on its complement. By the definition of $\Lambda$, choose a unit $u$ corresponding to this lattice point. Set $\varepsilon=u^2$. Then
> $$
> \tau\varepsilon=(\tau u)^2>0,\qquad \log(\tau\varepsilon)=2\log|\tau u|.
> $$
> Hence $\tau\varepsilon>1$ for $\tau\in T$, and $0<\tau\varepsilon<1$ for $\tau\notin T$.
>
> For example, in $K=\mathbb Q(\sqrt2)$ the two real embeddings of the unit $(1+\sqrt2)^2=3+2\sqrt2$ are $3+2\sqrt2>1$ and $3-2\sqrt2\in(0,1)$. These directly verify the two required inequalities; taking the inverse exchanges them.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Dirichlets Unit Theorem and Logarithmic Unit Lattices|Dirichlet Unit Lattices]]
- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields|Units in Real Quadratic Fields]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 2, printed p. 193, PDF p. 212]. Independent proof by lattice approximation; the exercise is not treated as an already proved theorem.
- **Routing:** The main tools are the trace-zero hyperplane, a full lattice, and a bounded fundamental domain, following the linear-algebra routing of existing unit lattice exercises.
- **Comparison:** The inequalities have the opposite directions to those in I §7 Exercise 6. Replacing the subset by its complement or taking the inverse unit converts one formulation into the other, but each source exercise still has its own note.
