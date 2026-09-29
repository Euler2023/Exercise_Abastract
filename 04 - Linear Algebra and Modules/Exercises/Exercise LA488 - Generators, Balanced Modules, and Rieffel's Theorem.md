---
title: "Exercise LA488: Generators, Balanced Modules, and Rieffel's Theorem"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - projective-modules
  - double-centralizers
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVII, Exercise 12, printed p. 662, PDF p. 677; Theorem 7.1, printed p. 660, PDF p. 675; Theorem 5.4, printed p. 655, PDF p. 670"
created: 2026-09-29
---

# Exercise LA488: Generators, Balanced Modules, and Rieffel's Theorem

## Problem Statement

> [!question] Lang, Chapter XVII, Exercise 12
> Prove that an $R$-module $E$ is a generator if and only if it is balanced, and finitely generated projective over $R'(E)$. Show that Theorem 5.4 is a consequence of Theorem 7.1.

> [!info] Definitions and Theorem 7.1
> For a left $R$-module $E$, put $R'(E)=\operatorname{End}_R(E)$ and $R''(E)=\operatorname{End}_{R'(E)}(E)$. The ring $R'(E)$ acts on the left by evaluation, and endomorphism rings use composition. The natural map is
>
> $$
> \lambda:R\longrightarrow R''(E),\qquad \lambda_r(x)=rx.
> $$
>
> The module $E$ is **balanced** when $\lambda$ is an isomorphism. It is a **generator** when every left $R$-module is a homomorphic image of a possibly infinite direct sum of copies of $E$.
>
> Theorem 7.1 (Morita) states: Let $E$ be an $R$-module. Then $E$ is a generator if and only if $E$ is balanced and finitely generated projective over $R'(E)$. [S2, Ch. XVII, §7, printed p. 660, PDF p. 675.]

> [!quote] Theorem 5.4 (Rieffel), as printed
> Let $R$ be a ring without two-sided ideals except $0$ and $R$. Let $L$ be a nonzero left ideal, $R'=\operatorname{End}_R(L)$ and $R''=\operatorname{End}_{R'}(L)$. Then the natural map $\lambda:R\to R''$ is an isomorphism. [S2, Ch. XVII, §5, printed p. 655, PDF p. 670.]

> [!warning] Source issue in the proof of Theorem 7.1
> On printed p. 660, the proof says “Let $g\in R'(E)$” and then asserts that $g^{(n)}$ commutes with every matrix whose entries lie in $R'(E)$. The needed hypothesis is $g\in R''(E)$, the commutant of $R'(E)$. Membership in $R'(E)$ alone does not ensure that its elements commute with each other. The corrected argument is included below, together with the converse that the book leaves to the reader.

## Hints

> [!hint]- Hint 1: Replace the generator condition by one finite surjection
> Show that $E$ is a generator precisely when some finite direct sum $E^{(n)}$ surjects onto $R$. Since the left regular module $R$ is free, that surjection splits. Use $E^{(n)}\cong R\oplus F$ to analyze the double centralizer and $\operatorname{Hom}_R(E^{(n)},E)$.

> [!hint]- Hint 2: Use a dual basis for the converse
> Put $S=\operatorname{End}_R(E)$. Finite projectivity over $S$ gives $e_i\in E$ and $S$-linear maps $f_i:E\to S$ with $y=\sum_i f_i(y)e_i$. For fixed $x$, the map $y\mapsto f_i(y)x$ lies in $\operatorname{End}_S(E)$. Use balancedness to regard it as an element $g_i(x)\in R$, and prove $\sum_i g_i(e_i)=1$.

## Solution

> [!success]- Independent complete proof of Morita's criterion and its Rieffel consequence
> All modules are left modules. Set $S=\operatorname{End}_R(E)$ with its ordinary composition product. Its evaluation action on $E$ commutes with the given $R$-action, which defines $\lambda:R\to\operatorname{End}_S(E)$.
>
> If $R$ is the zero ring, its only unital module is $E=0$ and all assertions of the criterion hold directly. We therefore assume $R\ne0$ in the criterion's proof below.
>
> **A finite criterion for generators.** If $E$ is a generator, there is a surjection from a direct sum of copies of $E$ onto $R$. A preimage of $1\in R$ has finite support. Restricting to those finitely many summands gives a map $\pi:E^{(n)}\to R$ whose image contains $1$ and hence, by $R$-linearity, all of $R$. We may take $n\ge1$ by adding an unused coordinate if necessary. Conversely, if such a finite surjection exists, taking direct sums gives a surjection from copies of $E$ onto any free $R$-module. Every module is a quotient of a free module, so $E$ is a generator.
>
> **A double-centralizer observation.** For every left $R$-module $F$, the module $V=R\oplus F$ is balanced. To prove this, let $h\in\operatorname{End}_{\operatorname{End}_R(V)}(V)$. Commuting with the two coordinate projections shows that $h$ preserves both summands; write its restrictions as $h_R$ and $h_F$. For $a\in R$, the map $(x,v)\mapsto(xa,0)$ is $R$-linear. Commuting with it gives $h_R(a)=h_R(1)a$. Put $r=h_R(1)$, so $h_R(x)=rx$ for every $x\in R$.
>
> For $w\in F$, the map $\psi_w(x,v)=(0,xw)$ is also $R$-linear. Commuting with this map and evaluating at $(1,0)$ gives $h_F(w)=rw$. Thus $h$ is multiplication by $r$ on both summands. Conversely, multiplication by any $r$ commutes with every $R$-linear endomorphism. Finally, the $R$-summand makes the action faithful. This proves balancedness of $V$.
>
> **A generator is balanced.** Suppose $E$ is a generator and choose $\pi:E^{(n)}\twoheadrightarrow R$. The map splits: if $z\in E^{(n)}$ satisfies $\pi(z)=1$, then $r\mapsto rz$ is a section. Consequently $E^{(n)}\cong R\oplus F$ for $F=\ker\pi$, so $E^{(n)}$ is balanced by the preceding observation.
>
> Let $g\in\operatorname{End}_S(E)=R''(E)$. Every $R$-endomorphism of $E^{(n)}$ is an $n\times n$ matrix with entries in $S$. Since $g$ commutes with each element of $S$, its diagonal action $g^{(n)}$ commutes with every such matrix. Balancedness of $E^{(n)}$ therefore gives an $r\in R$ such that $g^{(n)}$ is multiplication by $r$. Restricting to one coordinate gives $g=\lambda_r$, proving surjectivity of $\lambda$.
>
> The action on $E$ is faithful: if $rE=0$, then $rE^{(n)}=0$, and the surjection $\pi$ implies $rR=0$, hence $r=r1=0$. Thus $\lambda$ is injective as well, and $E$ is balanced.
>
> **A generator is finite projective over $S$.** Apply $\operatorname{Hom}_R(-,E)$ to the decomposition $E^{(n)}\cong R\oplus F$. This gives
>
> $$
> S^{(n)}\cong\operatorname{Hom}_R(E^{(n)},E)
> \cong\operatorname{Hom}_R(R,E)\oplus\operatorname{Hom}_R(F,E)
> \cong E\oplus\operatorname{Hom}_R(F,E).
> $$
>
> These are isomorphisms of left $S$-modules, where $S$ acts on Hom spaces by postcomposition. In the last map, $u:R\to E$ corresponds to $u(1)$; its inverse sends $e$ to $r\mapsto re$, and both maps respect the $S$-action. Hence $E$ is a direct summand of a finite free left $S$-module, which means it is finitely generated projective over $S$.
>
> **The converse.** Suppose $E$ is balanced and finite projective over $S$. A splitting of a finite free presentation gives elements $e_1,\ldots,e_n\in E$ and left $S$-linear maps $f_i:E\to S$ such that
>
> $$
> y=\sum_{i=1}^n f_i(y)e_i\qquad(y\in E).
> $$
>
> More explicitly, take $q:S^n\twoheadrightarrow E$ and an $S$-linear section $u:E\to S^n$, put $e_i=q(\epsilon_i)$ for the standard basis, and let $f_i$ be the $i$th coordinate of $u$. The identity $qu=1_E$ gives the formula.
>
> For fixed $x\in E$ and each $i$, define $T_{i,x}:E\to E$ by
>
> $$
> T_{i,x}(y)=f_i(y)x.
> $$
>
> It is additive, and for $s\in S$,
>
> $$
> T_{i,x}(sy)=f_i(sy)x=(s f_i(y))x=sT_{i,x}(y).
> $$
>
> Thus $T_{i,x}\in\operatorname{End}_S(E)$. Balancedness provides a unique $g_i(x)\in R$ with $\lambda_{g_i(x)}=T_{i,x}$. Additivity in $x$ makes $g_i:E\to R$ additive. If $r\in R$, then $f_i(y)\in S$ is an $R$-linear operator on $E$, so
>
> $$
> T_{i,rx}(y)=f_i(y)(rx)=r f_i(y)x
> =\lambda_rT_{i,x}(y).
> $$
>
> Injectivity of $\lambda$ implies $g_i(rx)=r g_i(x)$. Hence each $g_i$ is a homomorphism of left $R$-modules. Finally, the dual-basis identity gives
>
> $$
> \lambda_{\sum_i g_i(e_i)}(y)=\sum_i f_i(y)e_i=y,
> $$
>
> so $\sum_i g_i(e_i)=1$. The $R$-linear map
>
> $$
> E^{(n)}\longrightarrow R,\qquad
> (x_1,\ldots,x_n)\longmapsto\sum_i g_i(x_i)
> $$
>
> has $1$ in its image and is surjective. The finite generator criterion now proves that $E$ is a generator. This completes both directions of Theorem 7.1.
>
> **Rieffel's Theorem 5.4.** Under its hypotheses, $LR$ denotes the set of finite sums of products $xa$ with $x\in L$ and $a\in R$. It is a two-sided ideal because $L$ is a left ideal. It is nonzero, since $L=L1\subseteq LR$, and therefore $LR=R$. Write
>
> $$
> 1=\sum_{i=1}^n x_i a_i,\qquad x_i\in L,\quad a_i\in R.
> $$
>
> The map $L^{(n)}\to R$ sending $(y_i)$ to $\sum_i y_i a_i$ is $R$-linear and its image contains $1$, so it is surjective. Thus $L$ is a generator. By the just-proved Theorem 7.1 it is balanced, which is precisely the conclusion that
>
> $$
> R\longrightarrow\operatorname{End}_{\operatorname{End}_R(L)}(L)
> $$
>
> is an isomorphism. No assumption that $L$ is simple or that $R$ is Artinian is used.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Generators and Balanced Modules|Generators and Balanced Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules and Grothendieck Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]

## Notes

- **Source and proof status:** The exercise [S2, Ch. XVII, Ex. 12, printed p. 662, PDF p. 677], the definitions and Theorem 7.1 [printed p. 660, PDF p. 675], and the entire statement of Theorem 5.4 [printed p. 655, PDF p. 670] were checked on original page images. The book supplies the generator-to-balanced/projective direction, with the prime-mark error noted above, and leaves the converse to the reader. The full proof here independently supplies all steps and the requested consequence.
- **Handedness:** Both $R$ and $S=\operatorname{End}_R(E)$ act on the left of $E$, and their actions commute. The finite projectivity in the statement is over $S$, not over $R$. The formulas above use this convention throughout; no unmentioned opposite-ring identification is needed.
- **Proof inputs:** We use the characterization of finite projective modules as direct summands of finite free modules, and prove its needed dual-basis consequence explicitly. No general Morita-equivalence theorem is imported.
