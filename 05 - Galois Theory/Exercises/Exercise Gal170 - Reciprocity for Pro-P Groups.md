---
title: 'Exercise Gal170: Reciprocity for Pro-P Groups'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, Exercise 2, printed p. 298, PDF p. 317
source_refs:
- S4/ch-IV/sec-5/ex-2
created: '2026-10-23'
---

# Exercise Gal170: Reciprocity for Pro-P Groups

## Problem Statement

> [!question] Neukirch IV.5.2
> Generalize the theory developed so far in the following way. Let $P$ be a set of prime numbers and let $G$ be a pro-$P$-group, i.e., a profinite group all of whose quotients $G/N$ by open normal subgroups $N$ have order divisible only by primes in $P$.
> Let $d:G\to\mathbb Z_P$ be a surjective homomorphism onto the group $\mathbb Z_P=\prod_{p\in P}\mathbb Z_p$, and let $A$ be a $G$-module. A henselian $P$-valuation with respect to $d$ is by definition a homomorphism $v:A_k\to\mathbb Z_P$ which satisfies the following properties:
> (i) $v(A_k)=Z\supseteq\mathbb Z$ and $Z/nZ\simeq\mathbb Z/n\mathbb Z$ for all natural numbers $n$ which are divisible only by primes in $P$,
> (ii) $v(N_{K|k}A_K)=f_KZ$ for all finite extensions $K|k$, where $f_K=(d(G):d(G_K))$.
> Under the hypothesis that $H^i(G(L|K),U_L)=1$ for $i=0,-1$, for all unramified extensions $L|K$, prove the existence of a canonical reciprocity homomorphism $r_{L|K}:G(L|K)^{ab}\to A_K/N_{L|K}A_L$ for every finite Galois extension $L|K$.

## Hints

> [!hint]- Hint 1
> One can restrict the finite degrees to $P$-integers throughout the proof. Another complete reduction adjoins the missing-prime factor $\mathbb Z_{P^c}$ and applies the ordinary reciprocity existence theorem already proved in the text.

> [!hint]- Hint 2
> First localize $A$, in additive notation, at all primes outside $P$. Norm quotients for finite $P$-groups are annihilated by their orders, so this localization does not change the desired norm quotient.

## Solution

> [!success]- Independent derivation
> Use additive notation for the abstract abelian groups. Let $S$ be the positive integers whose prime factors lie outside $P$, and put $B=S^{-1}A$ and $Z'=S^{-1}Z\subseteq\mathbb Z_P$. Localization makes integers outside $P$ invertible on $B,Z'$. For a finite $P$-group $F$, the groups $H^0,H^{-1}$ are annihilated by $|F|$, so $S^{-1}$ does not change them. Taking fixed groups also commutes with this localization: an element has a finite orbit, and if its fraction is fixed, a single integer in $S$ kills all finitely many discrepancies, yielding a fixed numerator. Therefore
> $$
> B_K/N_{L/K}B_L\simeq A_K/N_{L/K}A_L,
> $$
> The two vanishing conditions for unramified units are preserved.
>
> Let $Q$ be the complement of $P$, put $D=\mathbb Z_Q$, and construct
> $$
> \Gamma=G\times D,\qquad d'(g,t)=(d(g),t)\in\mathbb Z_P\times\mathbb Z_Q=\widehat{\mathbb Z},
> $$
> $$
> A'=B\oplus D,\qquad v'(b,t)=(v(b),t).
> $$
> The group $G$ acts on $B$ through the original action, and the added $D$ factor acts trivially on both summands. Regard $A'$ as a discrete continuous module. Its value group is $Z'\times D$, which contains the diagonally embedded $\mathbb Z$. For any integer $m=m_Pm_Q$,
> $$
> (Z'\times D)/m(Z'\times D)\simeq\mathbb Z/m_P\mathbb Z\times\mathbb Z/m_Q\mathbb Z\simeq\mathbb Z/m\mathbb Z.
> $$
> Here integers outside $P$ are invertible on $Z'$, and integers supported on $P$ are invertible on $D$.
>
> Since finite quotients of the two factors have coprime orders, every open subgroup of $\Gamma$ is of the form $H\times n_QD$. This follows by decomposing subgroups of the coprime direct products in finite quotients. Its total index is $n_Pn_Q$, and its inertia degree is $f_Hn_Q$. On $B_H\oplus D$ the norm acts as $n_QN_{H/G}$ on the first summand and multiplication by $n_Pn_Q$ on the second. Its value group is therefore exactly
> $$
> f_HZ'\times n_QD=(f_Hn_Q)(Z'\times D).
> $$
> Hence $v'$ satisfies both conditions for an ordinary henselian valuation in the main text.
>
> The unit kernel of the valuation is the corresponding fixed group of $S^{-1}U$, independent of the added second summand. An unramified extension is unramified in the $G$ factor. The added cyclic factor of $Q$-order acts trivially, but its order is invertible on $S^{-1}U$, so its groups $H^0,H^{-1}$ vanish. Together with the original vanishing condition for the $P$-part, or by using norm and augmentation successively for coprime cyclic factors, this shows that $A'$ satisfies the ordinary condition (5.1).
>
> Apply the reciprocity existence proposition (5.6), independently proved in the main text, [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, printed pp. 294–295, PDF pp. 313–314]. For the original $L/K$, take the corresponding subgroup $G_L\times D\subseteq G_K\times D$ of $\Gamma$. Its Galois group is still $G(L/K)$. The second summand of the norm quotient is $D/[L:K]D=0$, while the localization isomorphism above identifies the first with the original $A_K/N A_L$. This gives the required homomorphism
> $$
> r_{L/K}:G(L/K)^{ab}\longrightarrow A_K/N_{L/K}A_L.
> $$
> The construction uses only canonical localization, the complementary-prime factor, and the canonical homomorphism in the text; it makes no additional choices. The same map can also be written directly using the Frobenius-lift/prime-element definition in the text, since all finite degrees used are $P$-integers.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Profinite Galois Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Norms and Tate Cohomology]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, Exercise 2, printed p. 298, PDF p. 317]. An independent reduction by adjoining the complementary-prime factor. The input is the ordinary $\widehat{\mathbb Z}$ case already proved in the main text, not the pro-$P$ conclusion of this exercise.
- **Boundary:** Only existence of the canonical homomorphism is proved; it is not asserted to be an isomorphism without the class field axiom. If $P$ is empty, then $G=1$ and the map is trivial; the complementary-factor interpretation remains consistent.
