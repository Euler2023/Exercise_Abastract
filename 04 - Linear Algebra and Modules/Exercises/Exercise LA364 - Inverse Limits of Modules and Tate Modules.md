---
title: "Exercise LA364: Inverse Limits of Modules and Tate Modules"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - inverse-limits
  - tate-modules
  - p-divisible-groups
  - source-issue
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 18, printed p. 170, PDF p. 185"
figures:
  - "[[Attachments/lang-algebra-3e-ch03-ex18-inverse-module-system.png]]"
created: 2026-08-29
---

# Exercise LA364: Inverse Limits of Modules and Tate Modules

## Problem Statement

> [!question] Exercise 18 — printed statement
> **(a)** Let $\{A_n\}$ be an inversely directed sequence of commutative rings, and let $\{M_n\}$ be an inversely directed sequence of modules, with $M_n$ an $A_n$-module, such that the diagram reproduced under **Source Figures** is commutative. The vertical maps are the homomorphisms of the directed sequence, and the horizontal maps give the operation of the ring on the module. Show that
>
> $$
> \varprojlim_n M_n
> $$
>
> is a module over
>
> $$
> \varprojlim_n A_n.
> $$
>
> **(b)** Let $M$ be a $p$-divisible group. Show that $T_p(A)$ is a module over $\mathbb Z_p$.
>
> **(c)** Let $M,N$ be $p$-divisible groups. Show that
>
> $$
> T_p(M\oplus N)=T_p(M)\oplus T_p(N)
> $$
>
> as modules over $\mathbb Z_p$.

> [!warning] Source issue
> Part (b) prints $T_p(A)$ although the group introduced in that sentence is $M$. The intended expression is $T_p(M)$. The printed form is preserved above; the solution uses the corrected statement.

## Source Figures

![[Attachments/lang-algebra-3e-ch03-ex18-inverse-module-system.png]]

- **Identity:** The unnumbered compatibility diagram for the $A_{n+1}$-action on $M_{n+1}$ and the $A_n$-action on $M_n$.
- **Locator:** [S2, Ch. III, Ex. 18, printed p. 170, PDF p. 185].
- **Asset type:** Direct crop from the original PDF exercise page; no mathematical labels or arrows were altered.

## Hints

> [!hint]- Hint 1
> For compatible families $a=(a_n)$ and $x=(x_n)$, try the coordinatewise action
>
> $$
> a\cdot x=(a_nx_n)_n.
> $$

> [!hint]- Hint 2
> Reindex Lang's definition as
>
> $$
> T_p(M)=\varprojlim_{n\ge1}M[p^n],
> $$
>
> where the transition map is multiplication by $p$. Each $M[p^n]$ is naturally a module over $\mathbb Z/p^n\mathbb Z$.

> [!hint]- Hint 3
> Compute the $p^n$-torsion of a binary direct sum before taking the inverse limit.

## Solution

> [!success]- Solution
> **(a)** Write the transition maps as
>
> $$
> \alpha_n:A_{n+1}\longrightarrow A_n,
> \qquad
> \mu_n:M_{n+1}\longrightarrow M_n.
> $$
>
> Commutativity of the source diagram says that
>
> $$
> \mu_n(a_{n+1}x_{n+1})
> =
> \alpha_n(a_{n+1})\mu_n(x_{n+1}).
> $$
>
> Put
>
> $$
> A=\varprojlim_nA_n,
> \qquad
> M_\infty=\varprojlim_nM_n.
> $$
>
> For $a=(a_n)\in A$ and $x=(x_n)\in M_\infty$, define
>
> $$
> a\cdot x=(a_nx_n)_n.
> $$
>
> The displayed compatibility gives
>
> $$
> \mu_n(a_{n+1}x_{n+1})=a_nx_n,
> $$
>
> so the coordinatewise product is again a compatible family. Addition, associativity, distributivity, and the unit axiom all hold coordinatewise. Thus $M_\infty$ is an $A$-module.
>
> **(b), with the corrected notation.** For an abelian group $M$, put
>
> $$
> M[p^n]=\ker\left(p^n:M\longrightarrow M\right).
> $$
>
> If $M$ is $p$-divisible, multiplication by $p$ maps
>
> $$
> M[p^{n+1}]\longrightarrow M[p^n]
> $$
>
> surjectively. Indeed, if $x\in M[p^n]$, choose $y\in M$ with $py=x$; then $p^{n+1}y=p^nx=0$.
>
> Each $M[p^n]$ is a module over $\mathbb Z/p^n\mathbb Z$. Reduction
>
> $$
> \mathbb Z/p^{n+1}\mathbb Z
> \longrightarrow
> \mathbb Z/p^n\mathbb Z
> $$
>
> and multiplication by $p$ on the torsion groups are compatible with scalar multiplication:
>
> $$
> p(a x)=\overline a\,(p x).
> $$
>
> Therefore part (a), applied to
>
> $$
> A_n=\mathbb Z/p^n\mathbb Z,
> \qquad
> M_n=M[p^n],
> $$
>
> makes
>
> $$
> T_p(M)=\varprojlim_nM[p^n]
> $$
>
> a module over
>
> $$
> \varprojlim_n\mathbb Z/p^n\mathbb Z=\mathbb Z_p.
> $$
>
> **(c)** For every $n\ge1$,
>
> $$
> (M\oplus N)[p^n]
> =
> M[p^n]\oplus N[p^n].
> $$
>
> The transition map on both sides is coordinatewise multiplication by $p$. Hence a compatible sequence in the left-hand system is exactly a pair of compatible sequences, one in the $M$-system and one in the $N$-system. Thus
>
> $$
> \begin{aligned}
> T_p(M\oplus N)
> &=\varprojlim_n\bigl(M[p^n]\oplus N[p^n]\bigr)\\
> &\cong
> \left(\varprojlim_nM[p^n]\right)
> \oplus
> \left(\varprojlim_nN[p^n]\right)\\
> &=T_p(M)\oplus T_p(N).
> \end{aligned}
> $$
>
> The isomorphism is $\mathbb Z_p$-linear because the action constructed in part (b) is coordinatewise.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]
- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[02 - Ring Theory/Exercises/Exercise R224 - The p-Adic Integers as an Inverse Limit|Exercise R224]]

## Notes

- **Source issue:** The printed $T_p(A)$ in part (b) is retained and visibly corrected to $T_p(M)$; the latter is forced by the sentence's input and by parts (a) and (c).
- **Indexing:** Lang defines $T_p(M)$ using sequences beginning at index $0$ and writes $T_p(M)=\varprojlim M[p^{n+1}]$. The solution merely reindexes this as $\varprojlim_{n\ge1}M[p^n]$.
- **Routing rationale:** Compatible scalar actions, torsion submodules, and direct sums are the primary tools, so the note belongs to Linear Algebra and Modules.
- **Source status:** The printed typo, all three parts, and the compatibility diagram were visually checked at [S2, Ch. III, Ex. 18, printed p. 170, PDF p. 185]. The module constructions and proofs are independent.
