---
title: "Exercise Rep143: Irreducibles Occur in Tensor Powers of a Faithful Representation"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - tensor-powers
  - burnside-theorem
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 21, printed p. 726, PDF p. 741"
created: 2026-09-29
---

# Exercise Rep143: Irreducibles Occur in Tensor Powers of a Faithful Representation

## Problem Statement

> [!question] Lang XVIII.21 — Burnside
> Deduce from Exercise 20 the following theorem of Burnside: Let $G$ be a finite group, $k$ a field of characteristic prime to the order of $G$, and $E$ a finite dimensional $(G,k)$-space such that the representation of $G$ is faithful. Then every irreducible representation of $G$ appears with multiplicity $\ge1$ in some tensor power $T^r(E)$.

## Hints

> [!hint]- Hint 1: Use a finite collection of degrees
> If $E\ne0$, all group elements act by nonzero operators. The preceding separation proof makes the action of $k[G]$ on the sum of its first $|G|$ tensor powers faithful.

> [!hint]- Hint 2: View endomorphisms as copies of their target
> Under the action by postcomposition, $\operatorname{End}_k(V)$ is a direct sum of $\dim_kV$ copies of $V$. Embed the regular module using its faithful actions, then apply complete reducibility.

## Solution

> [!success]- Independent derivation over a field that need not split the group
> Put $A=k[G]$ and $m=|G|$. We first recall the complete-reducibility argument with its exact hypothesis. If $U$ is a submodule of a finite-dimensional $G$-space $V$, choose a $k$-linear projection $p:V\to U$. Since $m$ is invertible in $k$, the average
>
> $$
> \overline p=\frac1m\sum_{g\in G}gpg^{-1}
> $$
>
> is $G$-linear, has image in $U$, and is the identity on $U$. Thus $V=U\oplus\ker\overline p$. Induction on dimension decomposes every such $V$ as a finite sum of simple modules. This is the needed form of Maschke's theorem.
>
> Assume $E\ne0$. Faithfulness of the group action makes the operators $\rho(g)$ distinct. They are nonzero because they are invertible on a nonzero space. For $1\le r\le m$ set $V_r=E^{\otimes r}$ and let $\rho_r:A\to\operatorname{End}_k(V_r)$ be the algebra representation. The proof of [[06 - Representation Theory/Exercises/Exercise Rep142 - Faithful Monoid Actions and Tensor Powers|Rep142]] gives an injective map
>
> $$
> \Phi:A\longrightarrow\bigoplus_{r=1}^m\operatorname{End}_k(V_r),
> \qquad a\longmapsto(\rho_r(a))_{r=1}^m.
> $$
>
> Regard the left side as the left regular $A$-module. On the $r$th endomorphism space let $b\in A$ act by $T\mapsto\rho_r(b)T$. Then $\rho_r(ba)=\rho_r(b)\rho_r(a)$ shows that $\Phi$ is $A$-linear.
>
> Choose a $k$-basis $v_1,\ldots,v_{d_r}$ of $V_r$. Evaluation on this basis gives an $A$-linear isomorphism
>
> $$
> \operatorname{End}_k(V_r)\longrightarrow V_r^{\oplus d_r},
> \qquad T\longmapsto(Tv_1,\ldots,Tv_{d_r}).
> $$
>
> It is bijective because an arbitrary list of images specifies a unique linear map, and it is $A$-linear by postcomposition. Consequently $A$ embeds in a finite direct sum of copies of the tensor powers $V_r$.
>
> Let $L$ be any simple $A$-module. For $0\ne x\in L$, the map $A\to L$, $a\mapsto ax$, is surjective. Thus $L$ is finite-dimensional, and by Maschke this surjection splits. Hence $L$ embeds in $A$, and therefore in the direct sum just constructed. At least one coordinate projection $L\to V_r$ is nonzero; otherwise the embedding would be zero. Simplicity of $L$ makes that nonzero map injective. Another application of Maschke splits its image in $V_r$. Therefore $L$ occurs as a direct summand of $E^{\otimes r}$ for some $1\le r\le |G|$, with positive integral multiplicity.
>
> If $E=0$, then $\operatorname{GL}(E)$ is the trivial group, so a faithful group action forces $G=\{1\}$. Its only simple module is $k$, which occurs in $T^0(E)=k$. This covers the zero-space boundary when “some tensor power” includes degree zero. If only positive powers are permitted, one must add $E\ne0$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Group Algebra|Group Algebra]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple Modules and Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[06 - Representation Theory/Exercises/Exercise Rep142 - Faithful Monoid Actions and Tensor Powers|Faithful Monoid Actions and Tensor Powers]]

## Notes

- **Source and proof status:** The statement was checked at [S2, Ch. XVIII, Exercise 21, printed p. 726, PDF p. 741]. The argument independently supplies averaging, the regular-module embedding, and the occurrence of a simple constituent.
- **Field boundary:** The proof does not require $k$ to be algebraically closed, characteristic zero, or a splitting field. The only characteristic condition is that $|G|$ be invertible in $k$.
- **Use of the preceding exercise:** Group elements act invertibly on $E\ne0$, so the zero-operator defect in the original monoid statement does not affect this deduction.
