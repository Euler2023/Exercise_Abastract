---
title: "Exercise LA355: Short Bases for Seminormed Abelian Groups"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - abelian-groups
  - seminorms
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 7, printed pp. 166–167, PDF pp. 181–182"
created: 2026-08-29
---

# Exercise LA355: Short Bases for Seminormed Abelian Groups

## Problem Statement

> [!question] Lang, Chapter III, Exercise 7
> Let $M$ be a finitely generated abelian group. A seminorm on $M$ is a real-valued function $v\mapsto|v|$ satisfying
>
> $$
> |v|\ge0,
> \qquad
> |nv|=|n|\,|v|\quad(n\in\mathbb Z),
> \qquad
> |v+w|\le|v|+|w|.
> $$
>
> Its kernel is the set of $v$ such that $|v|=0$.
>
> **(a)** Let $M_0$ be the kernel. Show that $M_0$ is a subgroup. If $M_0=\{0\}$, the seminorm is called a norm.
>
> **(b)** Assume that $M$ has rank $r$, and let $v_1,\ldots,v_r\in M$ be linearly independent over $\mathbb Z$ modulo $M_0$. Prove that $M/M_0$ has a basis $\{w_1,\ldots,w_r\}$ such that
>
> $$
> |w_i|\le\sum_{j=1}^i|v_j|.
> $$

## Hints

> [!hint]- Lang's printed construction
> Reduce to $M_0=\{0\}$ and set $M_1=\langle v_1,\ldots,v_r\rangle$. Let $d$ be the exponent of $M/M_1$. For each $j$, choose the smallest positive $n_{j,j}$ for which there are integers $n_{j,1},\ldots,n_{j,j-1}$ and $w_j\in M$ satisfying
>
> $$
> n_{j,1}v_1+\cdots+n_{j,j}v_j=dw_j.
> $$
>
> Reduce the earlier coefficients so that $0\le n_{j,k}\le d-1$.

> [!hint]- Hint 2
> Let $M_j=M\cap\operatorname{span}_{\mathbb Q}(v_1,\ldots,v_j)$. Minimality of $n_{j,j}$ is exactly what is needed to prove inductively that $w_1,\ldots,w_j$ generate $M_j$.

## Solution

> [!success]- Independently derived solution
> **(a)** Since $|0|=|0v|=0$, the kernel contains $0$. If $u,v\in M_0$, then
>
> $$
> |u-v|\le|u|+|-v|=|u|+|v|=0,
> $$
>
> so $u-v\in M_0$. Hence $M_0$ is a subgroup.
>
> Moreover, the seminorm descends to $M/M_0$: if $v-v'\in M_0$, then the triangle inequality in both directions gives $|v|=|v'|$. The descended seminorm has zero kernel. All torsion lies in $M_0$, since $nv=0$ with $n\ne0$ implies $0=|nv|=|n||v|$. Thus $M/M_0$ is torsion-free.
>
> **(b)** Replace $M$ by $M/M_0$; the images of the $v_i$ are still denoted $v_i$. Their independence shows that the quotient has rank at least $r$, while a quotient of the rank-$r$ group $M$ has rank at most $r$. Hence the quotient has rank exactly $r$. Because the $r$ images are independent, the subgroup
>
> $$
> L=\langle v_1,\ldots,v_r\rangle
> $$
>
> has finite index in $M$. Let $d$ be the exponent of the finite group $M/L$, so $dM\subseteq L$.
>
> For $1\le j\le r$, let $n_{j,j}$ be the smallest positive integer for which there are integers $n_{j,1},\ldots,n_{j,j-1}$ and $w_j\in M$ with
>
> $$
> dw_j=\sum_{k=1}^j n_{j,k}v_k.
> $$
>
> Such a choice exists because $w_j=v_j$ makes $n_{j,j}=d$. By replacing $w_j$ with $w_j-qv_k$ for $k<j$, we may reduce each earlier coefficient modulo $d$ and arrange
>
> $$
> 0\le n_{j,k}\le d-1\quad(k<j),
> \qquad
> 1\le n_{j,j}\le d.
> $$
>
> Put
>
> $$
> M_j=M\cap\operatorname{span}_{\mathbb Q}(v_1,\ldots,v_j).
> $$
>
> We claim inductively that $w_1,\ldots,w_j$ is a basis of $M_j$. Let $x\in M_j$. Since $dx\in L$, write $dx=\sum_{k=1}^j a_kv_k$. Divide $a_j=qn_{j,j}+s$ with $0\le s<n_{j,j}$. Then
>
> $$
> d(x-qw_j)=
> \sum_{k=1}^{j-1}(a_k-qn_{j,k})v_k+s v_j.
> $$
>
> If $s>0$, this contradicts the defining minimality of $n_{j,j}$. Hence $s=0$, so $x-qw_j\in M_{j-1}$. Induction gives generation by $w_1,\ldots,w_j$. Their coordinate matrix relative to the independent $v_i$ is triangular with nonzero diagonal, so they are independent. For $j=r$ this proves that $w_1,\ldots,w_r$ is a basis of $M$.
>
> Finally,
>
> $$
> d|w_j|
> \le\sum_{k=1}^j n_{j,k}|v_k|
> \le(d-1)\sum_{k=1}^{j-1}|v_k|+d|v_j|
> \le d\sum_{k=1}^j|v_k|.
> $$
>
> Dividing by $d$ gives the required bound.

## Related Concepts

- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]

## Notes

- **Terminology:** “Basis of $M/M_0$” means a $\mathbb Z$-basis; part (a) ensures this quotient is torsion-free under the hypotheses of part (b).
- **Source status:** [S2, Ch. III, Ex. 7, printed pp. 166–167, PDF pp. 181–182]. The proof expands Lang's printed construction and is independently derived.
- **Figure status:** No source figure is required.
