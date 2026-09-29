---
title: "Exercise LA531: Regular Sequences Characterized by Ext Vanishing"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XXI, Exercise 5, printed pp. 865–866, PDF pp. 880–881"
created: 2026-09-29
---

# Exercise LA531: Regular Sequences Characterized by Ext Vanishing

## Problem Statement

> [!question] Lang, Ch. XXI, Exercise 5
> The following exercise combines some notions of Chapter XX on homology, and some notions covered in this chapter and in Chapter X, §5. Let $M$ be an $A$-module.
>
> Let $A$ be Noetherian, $M$ finite module over $A$, and $I$ an ideal of $A$ such that $IM\ne M$. Let $r$ be an integer $\ge1$. Prove that the following conditions are equivalent:
>
> (i) $\operatorname{Ext}^i(N,M)=0$ for all $i<r$ and all finite modules $N$ such that $\operatorname{supp}(N)\subseteq\mathfrak Z(I)$.
>
> (ii) $\operatorname{Ext}^i(A/I,M)=0$ for all $i<r$.
>
> (iii) There exists a finite module $N$ with $\operatorname{supp}(N)=\mathfrak Z(I)$ such that $\operatorname{Ext}^i(N,M)=0$ for all $i<r$.
>
> (iv) There exists an $M$-regular sequence $a_1,\ldots,a_r$ in $I$.
>
> [Hint: (i)$\Rightarrow$(ii)$\Rightarrow$(iii) is clear. For (iii)$\Rightarrow$(iv), first note that
>
> $$
> 0=\operatorname{Ext}^0(N,M)=\operatorname{Hom}(N,M).
> $$
>
> Assume $\operatorname{supp}(N)=\mathfrak Z(I)$. Find an $M$-regular element in $I$. If there is no such element, then $I$ is contained in the set of divisors of $0$ of $M$ in $A$, which is the union of the associated primes. Hence $I\subseteq P$ for some associated prime $P$. This yields an injection $A/P\subseteq M$, so
>
> $$
> 0\ne\operatorname{Hom}_{A_P}(A_P/PA_P,M).
> $$
>
> By hypothesis, $N_P\ne0$ so $N_P/PN_P\ne0$, and $N_P/PN_P$ is a vector space over $A_P/PA_P$, so there exists a non-zero $A_P/PA_P$ homomorphism
>
> $$
> N_P/PN_P\to M_P,
> $$
>
> so $\operatorname{Hom}_{A_P}(N_P,M_P)\ne0$, whence $\operatorname{Hom}(N,M)\ne0$, a contradiction. This proves the existence of one regular element $a_1$.
>
> Now let $M_1=M/a_1M$. The exact sequence
>
> $$
> 0\to M\xrightarrow{a_1}M\to M/a_1M\to0
> $$
>
> yields the exact cohomology sequence
>
> $$
> \to\operatorname{Ext}^i(N,M)\to\operatorname{Ext}^i(N,M/a_1M)\to\operatorname{Ext}^{i+1}(N,M)\to
> $$
>
> so $\operatorname{Ext}^i(N,M/a_1M)=0$ for $i<r-1$. By induction there exists an $M_1$-regular sequence $a_2,\ldots,a_r$ and we are done.
>
> Last, (iv)$\Rightarrow$(i). Assume the existence of the regular sequence. By induction, $\operatorname{Ext}^i(N,a_1M)=0$ for $i<r-1$. We have an exact sequence for $i<r$:
>
> $$
> 0\to\operatorname{Ext}^i(N,M)\xrightarrow{a_1}\operatorname{Ext}^i(N,M).
> $$
>
> But $\operatorname{supp}(N)=\mathfrak Z(\operatorname{ann}(N))\subseteq\mathfrak Z(I)$, so $I\subseteq\operatorname{rad}(\operatorname{ann}(N))$, so $a_1$ is nilpotent on $N$. Hence $a_1$ is nilpotent on $\operatorname{Ext}^i(N,M)$, so $\operatorname{Ext}^i(N,M)=0$. Done.] See Matsumura's [Mat 70], p. 100, Theorem 28. The result is useful in algebraic geometry, with for instance $M=A$ itself. One thinks of $A$ as the affine coordinate ring of some variety, and one thinks of the equations $a_i=0$ as defining hypersurface sections of this variety, and the simultaneous equations $a_1=\cdots=a_r=0$ as defining a complete intersection. The theorem gives a cohomological criterion in terms of Ext for the existence of such a complete intersection.

> [!warning] Source issue
> The first localized Hom in the hint prints target $M$; the required target is $M_P$, as in the subsequent line. In the last induction paragraph the printed term $\operatorname{Ext}^i(N,a_1M)$ must use the quotient $M/a_1M$. Since $a_1M\cong M$, the printed term cannot supply that induction. Both original expressions are retained above; the proof uses the stated corrections.

## Hints

> [!hint]- Hint 1: Find a first regular element
> If $\operatorname{Hom}(N,M)=0$ and $\operatorname{supp}N=\mathfrak Z(I)$, show that $I$ cannot be contained in any associated prime of $M$. Then pass to $M/a_1M$.

> [!hint]- Hint 2: Explain nilpotence on Ext
> If $a^kN=0$, the scalar chain map $a^k$ on a free resolution of $N$ is homotopic to zero. An injective nilpotent endomorphism can act only on the zero module.

## Solution

> [!success]- Complete independent derivation
> Here $A$ is commutative and $\mathfrak Z(I)=\{\mathfrak p:I\subseteq\mathfrak p\}$. Ext indices are nonnegative; we set negative Ext groups equal to zero. We first justify the inputs, without assuming a depth theorem.
>
> **Support and localization.** For finite $N$,
>
> $$
> \operatorname{supp}N=\mathfrak Z(\operatorname{ann}N).
> $$
>
> Indeed $N_{\mathfrak p}=0$ exactly when some element outside $\mathfrak p$ kills all of a finite generating set. Thus support containment implies $I\subseteq\sqrt{\operatorname{ann}N}$. Here the radical equals the intersection of containing primes: if no power of $a$ lies in an ideal $J$, localize at powers of $a$ and pull back a maximal ideal of the resulting proper quotient to obtain a prime containing $J$ but not $a$.
>
> Finite $N$ is finitely presented because $A$ is Noetherian. A finite presentation expresses $\operatorname{Hom}_A(N,M)$ as the kernel of a map between finite direct powers of $M$. Exactness of localization therefore yields
>
> $$
> \operatorname{Hom}_A(N,M)_{\mathfrak p}
> \cong\operatorname{Hom}_{A_{\mathfrak p}}(N_{\mathfrak p},M_{\mathfrak p}).
> $$
>
> **Scalar action on Ext.** The ideal $\operatorname{ann}N$ kills every $\operatorname{Ext}^i_A(N,M)$. Take a free resolution $P_\bullet\to N$. If $bN=0$, construct a homotopy between $b\operatorname{id}_{P_\bullet}$ and zero as follows. The map $bP_0$ lies in the kernel of the augmentation, so freeness lifts it to $h_0:P_0\to P_1$. Having constructed earlier terms, $b\operatorname{id}_{P_j}-h_{j-1}d_j$ has image in $\ker d_j=\operatorname{im}d_{j+1}$: applying $d_j$ and using the previous homotopy identity proves this. Freeness lifts it to $h_j:P_j\to P_{j+1}$. Hence $b\operatorname{id}=dh+hd$. On $\operatorname{Hom}_A(P_\bullet,M)$, multiplication on values equals precomposition by this scalar map, so it induces zero on cohomology. In particular, the support condition ensures that for each $a\in I$ some power of $a$ kills every Ext group.
>
> The long exact Ext sequence in the second variable follows by applying $\operatorname{Hom}_A(P_j,-)$ degreewise to a short exact sequence. Each $P_j$ is free, so those sequences are exact; the connecting map is the usual lift-and-differentiate construction for a short exact sequence of cochain complexes.
>
> **(i)$\Rightarrow$(ii)$\Rightarrow$(iii).** The finite cyclic module $A/I$ has support $\mathfrak Z(I)$. Apply (i) to it, then use it as the witness for (iii).
>
> **(iii)$\Rightarrow$(iv).** Let $N$ witness (iii); then $\operatorname{Hom}(N,M)=0$. If every $a\in I$ is a zero divisor on $M$, the finite-associated-prime lemma and prime avoidance proved in the linked Koszul concept give $I\subseteq\mathfrak p=\operatorname{ann}(m)$ for some $m\ne0$. Localizing $A/\mathfrak p\hookrightarrow M$ embeds the residue field $k(\mathfrak p)$ in $M_{\mathfrak p}$. Since $\mathfrak p\in\operatorname{supp}N$, the finite local module $N_{\mathfrak p}$ is nonzero, and
>
> $$
> V=N_{\mathfrak p}/\mathfrak pN_{\mathfrak p}\ne0.
> $$
>
> This is the following elementary form of Nakayama's lemma: if generators of a finite local module satisfy $L=\mathfrak mL$, express them as an $\mathfrak m$-coefficient matrix times themselves. The matrix $1-B$ has determinant congruent to $1$ modulo $\mathfrak m$, hence a unit; its adjugate forces all generators to be zero.
>
> Choose a nonzero linear functional $V\to k(\mathfrak p)$ and compose
>
> $$
> N_{\mathfrak p}\twoheadrightarrow V\to k(\mathfrak p)\hookrightarrow M_{\mathfrak p}.
> $$
>
> This gives a nonzero Hom, contradicting the localization identity. Therefore some $a_1\in I$ acts injectively on $M$. Also $a_1M\subseteq IM\ne M$, so it is regular with the required nonzero quotient.
>
> For $r=1$, this proves (iv). For $r>1$, put $Q=M/a_1M$. The exact sequence $0\to M\xrightarrow{a_1}M\to Q\to0$ gives $\operatorname{Ext}^i(N,Q)=0$ for $0\le i<r-1$, because both neighboring Ext groups for $M$ vanish. The quotient is finite and $Q/IQ\cong M/IM\ne0$. Induction with the same witness $N$ produces a $Q$-regular sequence $a_2,\ldots,a_r$ in $I$. Prepending $a_1$ produces the required $M$-regular sequence.
>
> **(iv)$\Rightarrow$(i).** Induct on $r$, allowing the vacuous $r=0$ case. Fix finite $N$ with the required support and put $Q=M/a_1M$. The remaining sequence is $Q$-regular of length $r-1$, so induction gives $\operatorname{Ext}^j(N,Q)=0$ for $0\le j<r-1$. For $0\le i<r$, the long exact sequence contains
>
> $$
> \operatorname{Ext}^{i-1}(N,Q)=0\to\operatorname{Ext}^i(N,M)
> \xrightarrow{a_1}\operatorname{Ext}^i(N,M).
> $$
>
> Multiplication by $a_1$ is thus injective. The support and scalar-action facts show that some power of it is zero. Its iterates are injective too, so the Ext group is zero. This proves (i) and all equivalences.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Koszul Complexes and Regular Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Module Support and Fibers]]
- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences]]

## Notes

Statement and full hint checked at printed pp. 865–866 / PDF pp. 880–881. The solution independently proves the support, localization, scalar-action, and Nakayama inputs, using the finite-associated-prime and prime-avoidance proofs in the linked Koszul concept. It assumes neither the depth–Ext theorem nor Matsumura's cited theorem. The commutative-ring convention is explicit in Chapter XXI, §4, printed p. 850 / PDF p. 865.
