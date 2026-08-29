---
title: "Exercise Rep116: Permutation Bases in Finite-Index Sublattices"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - permutation-lattices
  - source-issue
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 6, printed p. 166, PDF p. 181; Serge Lang, Algebraic Number Theory, 2nd ed., Ch. IX, §4, Theorem 1, printed pp. 190–191, PDF pp. 197–198"
created: 2026-08-29
---

# Exercise Rep116: Permutation Bases in Finite-Index Sublattices

## Problem Statement

> [!question] Lang, Chapter III, Exercise 6 (Artin–Tate; printed statement)
> Let $G$ be a finite group operating on a finite set $S$. For $w\in S$, denote $1\cdot w$ by $[w]$, so that
>
> $$
> \mathbb Z(S)=\bigoplus_{w\in S}\mathbb Z[w].
> $$
>
> Define an action of $G$ on $\mathbb Z(S)$ by $\sigma[w]=[\sigma w]$ and extend it by linearity. Let $M$ be a subgroup of $\mathbb Z(S)$ of rank $\#S$. Show that $M$ has a $\mathbb Z$-basis $\{y_w\}_{w\in S}$ such that
>
> $$
> \sigma y_w=y_{\sigma w}
> $$
>
> for every $w\in S$.

> [!warning] Source issue — the printed statement is false
> No $G$-invariance hypothesis is imposed on $M$, and even adding that hypothesis does not guarantee a permutation basis for $M$ itself. The Artin–Tate result cited by Lang instead produces a **finite-index sublattice** $M'\subseteq M$ with such a basis.

## Hints

> [!hint]- Hint 1
> Test the printed conclusion when $G=C_2$ interchanges the two standard basis vectors of $\mathbb Z^2$ and
>
> $$
> M=\{(a,b)\in\mathbb Z^2:a\equiv b\pmod2\}.
> $$

> [!hint]- Hint 2
> A basis permuted by the transposition would have the form $(a,b),(b,a)$. Compare its determinant with the index $[\mathbb Z^2:M]$.

## Solution

> [!success]- Counterexample and corrected Artin–Tate statement
> Let $S=\{1,2\}$ and let the nontrivial element $\tau\in C_2$ interchange $1$ and $2$. Identify $\mathbb Z(S)$ with $\mathbb Z^2$, so $\tau(a,b)=(b,a)$, and set
>
> $$
> M=\{(a,b)\in\mathbb Z^2:a\equiv b\pmod2\}.
> $$
>
> Then $M$ is $G$-invariant, has rank $2$, and has index $2$ in $\mathbb Z^2$. Suppose the printed conclusion held. After indexing the alleged basis compatibly with $S$, it would have the form
>
> $$
> y_1=(a,b),
> \qquad
> y_2=\tau y_1=(b,a).
> $$
>
> Because $y_1\in M$, the integers $a$ and $b$ have the same parity. On the other hand, a basis of the index-two lattice $M$ must have determinant of absolute value $2$, whereas
>
> $$
> \det(y_1,y_2)=a^2-b^2=(a-b)(a+b)
> $$
>
> is divisible by $4$. This contradiction disproves the printed statement, even after $G$-invariance is added.
>
> **Corrected Artin–Tate form (external input).** If $M$ is a $G$-invariant lattice in the real permutation space on $S$, then there exists a $G$-invariant sublattice $M'\subseteq M$ of finite index and a $\mathbb Z$-basis $\{Y_w\}_{w\in S}$ of $M'$ satisfying
>
> $$
> \sigma Y_w=Y_{\sigma w}.
> $$
>
> This is used here as an external theorem, not as a result proved in *Algebra*: [S3, Ch. IX, §4, Theorem 1, printed pp. 190–191, PDF pp. 197–198].
>
> If one starts with an arbitrary full-rank subgroup $M\subseteq\mathbb Z(S)$, first put
>
> $$
> M_0=\bigcap_{\sigma\in G}\sigma M.
> $$
>
> This is an intersection of only finitely many subgroups. Each $\sigma M$ has finite index, so $M_0$ also has finite index in $\mathbb Z(S)$ and lies in $M$. It is $G$-invariant. Applying the external Artin–Tate theorem to $M_0$ gives a finite-index sublattice $M'\subseteq M_0\subseteq M$ with the required permutation basis. Thus the conclusion becomes correct only after replacing $M$ by a suitable finite-index sublattice.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]

## Notes

- **Routing:** Representation Theory is primary because the issue concerns integral $G$-lattices inside a permutation representation.
- **Notation:** The printed notation $\mathbb Z(S)$ is retained exactly; it denotes the free abelian permutation module $\bigoplus_{w\in S}\mathbb Z[w]$.
- **Source issue:** The S2 wording is preserved above and is not silently repaired. The counterexample is an independent verification that the printed claim is false.
- **External proof input:** Only the finite-index replacement theorem is imported from [S3, Ch. IX, §4, Theorem 1, printed pp. 190–191, PDF pp. 197–198].
- **Figure status:** No source figure is required.
