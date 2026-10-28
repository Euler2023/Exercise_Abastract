---
title: "Exercise G353: Conjugation Invariance of Elliptic Periods"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.2, Exercise 2.2.3, printed p. 52, PDF p. 67"
source_refs:
  - "S7/ch-2/sec-2/ex-3"
created: 2026-10-28
---

# Exercise G353: Conjugation Invariance of Elliptic Periods

## Problem Statement

> [!question] Original Exercise 2.2.3
> Show that if $\tau\in\mathcal H$ and $\gamma\in SL_2(\mathbb Z)$ then the period of $\gamma(\tau)$ under $\gamma\Gamma\gamma^{-1}$ is the same as the period of $\tau$ under $\Gamma$.
>
> **Definition used in Section 2.2, printed p. 49 / PDF p. 64.** For a congruence subgroup $\Gamma\subseteq SL_2(\mathbb Z)$, let $\Gamma_\tau=\{g\in\Gamma:g\tau=\tau\}$. Its effective stabilizer has order
> $$
> h_{\tau,\Gamma}=\left|\{\pm I\}\Gamma_\tau/\{\pm I\}\right|,
> $$
> called the period of $\tau$. The term “effective” removes the matrices $\pm I$, which induce the identity transformation.

## Hints

> [!hint]- Hint 1
> Conjugation carries a stabilizer to the stabilizer of the image point. Write this equality with the ambient group specified.

> [!hint]- Hint 2
> The matrices $I$ and $-I$ are central, so conjugation also induces an isomorphism after adjoining and quotienting by $\{\pm I\}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent proof by conjugating stabilizers and their effective quotients.
>
> Set $\Gamma'=\gamma\Gamma\gamma^{-1}$ and $\tau'=\gamma\tau$. Every $g'\in\Gamma'$ has the form $g'=\gamma g\gamma^{-1}$ for a unique $g\in\Gamma$. For these elements,
> $$
> g'\tau'=\tau'
> \quad\Longleftrightarrow\quad
> \gamma g\tau=\gamma\tau
> \quad\Longleftrightarrow\quad
> g\tau=\tau,
> $$
> since $\gamma$ acts bijectively on $\mathcal H$. Thus
> $$
> \Gamma'_{\tau'}=\gamma\Gamma_\tau\gamma^{-1}.
> $$
> Conjugation fixes both scalar matrices $\pm I$. It therefore gives a well-defined group homomorphism
> $$
> \begin{aligned}
> \{\pm I\}\Gamma_\tau/\{\pm I\}
> &\longrightarrow \{\pm I\}\Gamma'_{\tau'}/\{\pm I\},\\
> \{\pm I\}g&\longmapsto \{\pm I\}\gamma g\gamma^{-1}.
> \end{aligned}
> $$
> Replacing $g$ by $-g$ replaces its conjugate by its negative, so the formula does not depend on the representative. Conjugation by $\gamma^{-1}$ is its inverse. The groups are isomorphic and consequently have equal orders:
> $$
> h_{\gamma\tau,\gamma\Gamma\gamma^{-1}}=h_{\tau,\Gamma}.
> $$
> In particular, when $\gamma\in\Gamma$, the period depends only on the orbit $\Gamma\tau$. When $\Gamma$ is normal in $SL_2(\mathbb Z)$, all points of $Y(\Gamma)$ over the same point of $Y(1)$ have the same period, because any two representatives of that fiber differ by an element of $SL_2(\mathbb Z)$ and the conjugated group remains $\Gamma$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The exercise and period definition were checked on 200 dpi images of printed pp. 52 and 49 / PDF pp. 67 and 64. The source's finite-stabilizer input is Proposition 2.2.2, stated on printed p. 48 / PDF p. 63 and established through Section 2.3; the invariance argument itself only needs the displayed conjugation isomorphism.
- **Notation boundary:** The period is the number of fixing transformations, not necessarily the number of matrices in $\Gamma_\tau$. If $-I\in\Gamma$, then $h_{\tau,\Gamma}=|\Gamma_\tau|/2$; otherwise it is $|\Gamma_\tau|$.
- **Routing:** Conjugation, stabilizers and quotient group isomorphisms supply the entire argument, so the note belongs to Group Theory.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
