---
title: "Exercise G355: Coset Translates Cover the Modular Quotient"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.3, Exercise 2.3.8, printed p. 57, PDF p. 72; Lemma 2.3.1, printed p. 53, PDF p. 68; Appendix A hint, printed p. 416, PDF p. 427"
source_refs:
  - "S7/ch-2/sec-3/ex-8"
created: 2026-10-28
---

# Exercise G355: Coset Translates Cover the Modular Quotient

## Problem Statement

> [!question] Original Exercise 2.3.8
> Suppose $SL_2(\mathbb Z)=\bigcup_j\{\pm I\}\Gamma\gamma_j$ where $\Gamma$ is a congruence subgroup. Show that $\bigcup_j\gamma_j\mathcal D$ surjects to $Y(\Gamma)$. (A hint for this exercise is at the end of the book.)
>
> **Definitions and referenced input.** Here
> $$
> \mathcal H=\{z\in\mathbb C:\operatorname{Im}z>0\},\qquad
> \mathcal D=\{z\in\mathcal H:|\operatorname{Re}z|\le1/2,\ |z|\ge1\},
> $$
> $Y(\Gamma)=\Gamma\backslash\mathcal H$, and the map in question is the restriction of the orbit projection $z\mapsto\Gamma z$. Matrices act by fractional linear transformations. The subgroup $\{\pm I\}\Gamma$ allows both signs even when $-I\notin\Gamma$.
>
> Lemma 2.3.1, printed p. 53 / PDF p. 68, says that every $SL_2(\mathbb Z)$-orbit in $\mathcal H$ meets $\mathcal D$.

## Hints

> [!hint]- Hint 1
> Given $\tau\in\mathcal H$, use Lemma 2.3.1 to write $\tau=g\tau_0$ with $\tau_0\in\mathcal D$ and $g\in SL_2(\mathbb Z)$. Pay attention to which side of the equation contains the inverse.

> [!hint]- Hint 2
> Factor $g=\varepsilon\delta\gamma_j$ with $\varepsilon\in\{\pm I\}$ and $\delta\in\Gamma$. The factor $\varepsilon$ acts trivially on $\mathcal H$, and $\delta$ disappears on passage to the $\Gamma$-orbit.

## Solution

> [!success]- Solution
> **Proof scope:** Independent orbit-and-coset argument using the source-proved Lemma 2.3.1.
>
> Let $\Gamma\tau$ be an arbitrary point of $Y(\Gamma)$. The lemma gives $h\in SL_2(\mathbb Z)$ such that
> $$
> \tau_0=h\tau\in\mathcal D.
> $$
> Put $g=h^{-1}$, so $\tau=g\tau_0$. By the assumed coset covering, there exist an index $j$, a sign matrix $\varepsilon\in\{\pm I\}$, and a matrix $\delta\in\Gamma$ such that
> $$
> g=\varepsilon\delta\gamma_j.
> $$
> The two sign matrices both act as the identity transformation: for example,
> $$
> (-I)z=\frac{-z}{-1}=z.
> $$
> Consequently
> $$
> \tau=g\tau_0=\delta(\gamma_j\tau_0),
> \qquad
> \Gamma\tau=\Gamma(\gamma_j\tau_0).
> $$
> Since $\tau_0\in\mathcal D$, its image $\gamma_j\tau_0$ lies in $\gamma_j\mathcal D\subset\bigcup_j\gamma_j\mathcal D$. Thus every orbit $\Gamma\tau$ has a representative in the stated union, proving surjectivity.
>
> The source lemma itself is proved by translating into the strip $|\operatorname{Re}z|\le1/2$ and applying $z\mapsto-1/z$ whenever $|z|<1$. Each inversion strictly increases the imaginary part, and only finitely many possible larger heights occur because the possible bottom rows $(c,d)$ with $|c\tau+d|<1$ form a finite set of lattice points. This is the source-proved existence input, not an additional injectivity assertion.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Fundamental Domain|Fundamental Domain]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete exercise was checked on printed p. 57 / PDF p. 72. Lemma 2.3.1 and its proof were checked on printed p. 53 / PDF p. 68. Appendix A's hint, printed p. 416 / PDF p. 427, says to express a given point as a modular translate of a point of $\mathcal D$.
- **Proof status:** The coset factorization and orbit equality above are independently derived; the existence of $\tau_0$ is supplied by the proved source lemma.
- **Source proof precision:** In Lemma 2.3.1 the finiteness argument must concern the possible larger imaginary parts, rather than all transformed points as the source wording says. Horizontal translates can give infinitely many transformed points at the same height. Finiteness of the larger heights is exactly what proves termination, because each inversion strictly increases the height.
- **Boundary:** Surjectivity does not make the union a connected fundamental domain or give uniqueness of representatives. The source explicitly notes the possible lack of connectedness on printed p. 56 / PDF p. 71.
- **Sign and direction:** It is not necessary to assume $-I\in\Gamma$, because signs already act trivially. If the reduction map sends $\tau$ into $\mathcal D$, its inverse is the matrix that must be decomposed into the displayed cosets.
- **Routing:** The principal tools are coset decomposition and orbit projection.
- **Learning status:** The status remains not-started.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
