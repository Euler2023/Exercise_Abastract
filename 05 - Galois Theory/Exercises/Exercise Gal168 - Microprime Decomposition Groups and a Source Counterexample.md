---
title: 'Exercise Gal168: Microprime Decomposition Groups and a Source Counterexample'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, Exercise 4, printed p. 290, PDF p. 309
source_refs:
- S4/ch-IV/sec-4/ex-4
created: '2026-10-23'
---

# Exercise Gal168: Microprime Decomposition Groups and a Source Counterexample

## Problem Statement

> [!question] Neukirch IV.4.4
> Show that if $L|K$ is Galois, then the Galois group $G(L|K)$ operates transitively on $\operatorname{spec}(L)$. The "decomposition group"
> $$
> G_{\mathfrak P}(L|K)=\{\sigma\in G(L|K):\mathfrak P^\sigma=\mathfrak P\}
> $$
> is cyclic, and if $Z_{\mathfrak P}=L^{G_{\mathfrak P}(L|K)}$ is the "decomposition field" of $\mathfrak P\in\operatorname{spec}(L)$, then $L|Z_{\mathfrak P}$ is unramified.

> [!warning] Source issue
> The printed phrase "transitively on spec(L)" must be restricted to the fiber over each base microprime. More seriously, the final assertion that $L/Z_{\mathfrak P}$ is unramified is false under the stated hypotheses; an independent counterexample is given below. At infinite levels, "cyclic" must also be interpreted as procyclic. The statement has not been silently amended.

## Hints

> [!hint]- Hint 1
> First fix a base microprime. For the normal subgroup $H=G_L$, the fiber above it is $H\backslash G_K/C$. The quotient group $G_K/H$ acts transitively on this fiber, and the stabilizer is the image of $C$.

> [!hint]- Hint 2
> The last sentence does not follow merely from cyclicity of the stabilizer. One must compare $d(G_{Z_{\mathfrak P}}):d(G_L)$, using the global definition in this chapter. The return index of a microprime may include abstract ramification.

> [!hint]- Hint 3
> A counterexample can be constructed using $G=\mathbb Z_3\rtimes\widehat{\mathbb Z}$, with $(a,b)(c,e)=(a+4^{b_3}c,b+e)$, and $H=\ker(a+b_3\bmod3)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **The valid finite-level conclusion.** Retain $G_0=G_K$ and the open normal subgroup $H=G_L$ from the preceding exercise. Fix a primitive base Frobenius $s$ and $C=\overline{\langle s\rangle}$. The action of $G_0/H$ on the fiber $H\backslash G_0/C$ is transitive. A stabilizer is conjugate to $CH/H$, a finite image of the procyclic group $C$, so it is finite cyclic. At an infinite Galois level, inverse limits of the finite levels give transitivity on each fiber and a procyclic stabilizer, which need not be a finite cyclic group.
>
> **Transitivity on the entire spectrum, as printed, is false.** The action preserves the underlying base microprime. Unless there is only one base microprime, it cannot be transitive on all of $\operatorname{spec}(L)$. The same counterexample below gives at least three base microprimes; even $L=K$ then disproves transitivity on the whole spectrum.
>
> **Microprime return indices differ from the chapter's $d$-ramification.** Define
> $$
> G=\mathbb Z_3\rtimes\widehat{\mathbb Z},\qquad
> (a,b)(c,e)=(a+4^{b_3}c,b+e),\qquad d(a,b)=b.
> $$
> Here $b_3$ is the $3$-adic component of $b$, $4^z$ is defined by continuous $3$-adic exponentiation, and $d$ is a continuous surjection. This group satisfies the original hypothesis on closed abelian subgroups: two commuting elements in the $3$-Sylow subgroup satisfy
> $$
> a(4^{e_3}-1)=c(4^{b_3}-1).
> $$
> If the projection of an abelian subgroup contains a nonzero $b_3$, its intersection with the first factor $\mathbb Z_3$ is trivial. Thus this abelian pro-$3$ group embeds in the second factor $\mathbb Z_3$. If its projection is zero, it lies in the first factor. In both cases it is procyclic. For each $\ell\ne3$, its $\ell$-Sylow subgroup injects via $d$ into $\mathbb Z_\ell$ and is also procyclic. An abelian profinite group is the product of its Sylow subgroups, so every closed abelian subgroup is procyclic. This uses $4^z-1\ne0$ for nonzero $z\in\mathbb Z_3$, which follows from the binomial valuation identity $v_3(4^z-1)=1+v_3(z)$.
>
> Put $H=\ker(G\to\mathbb Z/3\mathbb Z,(a,b)\mapsto a+b_3)$. Since $4^{b_3}\equiv1\pmod3$, the map is a surjective homomorphism and $H$ is normal of index $3$. For every $b$ one can choose $a\equiv-b_3\pmod3$, so $d(H)=\widehat{\mathbb Z}$. Consequently $L/K$ has $f=1,e=3$ and is a nontrivial totally ramified extension.
>
> Take $s=(0,1)$. Its $d$-degree is $1$, so it is a primitive Frobenius, and $s^3\in H$. The centralizer of $s^3$ is $\{(0,b):b\in\widehat{\mathbb Z}\}$, because $4^3-1\ne0$. If $s^3=t^m$ were a proper integral power of a Frobenius in $H$, then $m\,d(t)=3$, forcing $m=3,d(t)=1$. The centralizer calculation would then give $t=s\notin H$, a contradiction. Hence $s^3$ defines a microprime $\mathfrak P$ of $L$. The element $sH$ generates $G/H$ and fixes $[s^3]_H$. Thus its decomposition group is all of $G/H$ and $Z_{\mathfrak P}=K$, whereas $L/K$ has already been shown to have $e=3$ and is not unramified.
>
> Moreover, for elements $(a,1)$ the value of $a\bmod3$ is invariant under conjugation. This gives at least three primitive Frobenius conjugacy classes, confirming that the base spectrum can have several points.
>
> The valid corrected conclusion is therefore: transitivity on each fiber, with cyclic stabilizers at finite levels and procyclic stabilizers at infinite levels. The final assertion of $d$-unramifiedness is false under the printed hypotheses and cannot be retained as a proved conclusion.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions]]
- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Decomposition and Inertia Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §4, Exercise 4, printed p. 290, PDF p. 309]. All three printed assertions are retained. The valid part is proved independently, and the counterexample satisfies the hypothesis that closed abelian subgroups are procyclic.
- **Boundary:** The return index of an upper microprime is not the $d$-inertia degree of the entire abstract extension. Confusing these gives the erroneous final assertion. The counterexample consists of profinite data and applies to the abstract "fields" explicitly allowed in this chapter.
