---
title: "Exercise LA616: Tensor Products and Quotients of Finitely Generated Groups"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.6, Exercise 6.6.1, printed p. 251, PDF p. 265"
source_refs:
  - "S7/ch-6/sec-6/ex-1"
created: 2026-10-28
---

# Exercise LA616: Tensor Products and Quotients of Finitely Generated Groups

## Problem Statement

> [!question] Original Exercise 6.6.1
> Prove Lemma 6.6.2.

> **Referenced context.** Let $G$ be a finitely generated abelian group and $k$ a characteristic-zero field. (a) $G\otimes k\cong k^{\operatorname{rank}G}$. (b) For every subgroup $K\subseteq G$, $(G/K)\otimes k\cong(G\otimes k)/(K\otimes k)$. (c) If $A$ is a commutative unital ring acting on $G$, then $G\otimes k$ is an $A$-module by $a(\sum g_i\otimes k_i)=\sum ag_i\otimes k_i$, and $(JG)\otimes k=J(G\otimes k)$ for every ideal $J\subseteq A$.

## Hints

> [!hint]- Hint 1
> Decompose a finitely generated abelian group into a free part and finite cyclic parts.

> [!hint]- Hint 2
> Use Smith normal form for a subgroup of a free abelian group, then check the claimed ring action on the defining balanced relations.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> All tensor products are over $\mathbb Z$. By the structure theorem for finitely generated abelian groups, $G\cong\mathbb Z^r\oplus\bigoplus_i\mathbb Z/n_i\mathbb Z$. Tensor products commute with finite direct sums directly from their defining additive relations. A torsion element $x$ of order $n$ satisfies $x\otimes c=nx\otimes(c/n)=0$ in characteristic zero, whereas $\mathbb Z\otimes k\to k$, $m\otimes c\mapsto mc$, has inverse $c\mapsto1\otimes c$. This proves (a).
>
> For (b), first the natural map $G\otimes\mathbb Q\to(G/K)\otimes\mathbb Q$ is onto, with kernel $K\otimes\mathbb Q$: a rational fraction $g/n$ maps to zero exactly when a nonzero multiple of $g$ belongs to $K$, so then $g/n$ is a rational multiple of an element of $K$. The map $K\otimes\mathbb Q\to G\otimes\mathbb Q$ is injective by the same fraction description. Extending these rational vector spaces to $k$ preserves kernels and quotients: select a rational basis of the kernel and extend it to a basis of the middle space; the identical basis decomposition persists over $k$. Since $G\otimes k\cong(G\otimes\mathbb Q)\otimes_{\mathbb Q}k$, this gives exactly
> $$
> (G/K)\otimes k\cong(G\otimes k)/(K\otimes k).
> $$
> Here $K\otimes k$ is identified with its injective image. The displayed isomorphism sends $(g+K)\otimes c$ to the class of $g\otimes c$.
>
> For (c), for fixed $a\in A$ the map $g\mapsto ag$ is additive. Thus $a(g\otimes c)=ag\otimes c$ respects both additive tensor relations and the balancing relation $ng\otimes c=g\otimes nc$. It induces a $k$-linear endomorphism. The equalities $(a+b)g=ag+bg$, $(ab)g=a(bg)$ and $1g=g$ imply the module axioms on pure tensors, hence all sums. Finally elements of $(JG)\otimes k$ are sums of $(ag)\otimes c=a(g\otimes c)$ with $a\in J$, proving containment in $J(G\otimes k)$. Conversely every generator $a(g\otimes c)$ is $(ag)\otimes c$, proving the reverse containment. Part (b) justifies identifying this tensor product with its image.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Torsion Modules|Torsion Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Source expansion:** Lemma 6.6.2 is at printed p. 245, PDF p. 259; its full three-part statement is supplied below.
- **Imported input:** The structure theorem for finitely generated abelian groups. Characteristic zero is essential: $(\mathbb Z/p\mathbb Z)\otimes\mathbb F_p\cong\mathbb F_p$.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
