---
title: "Exercise R28: Chinese Remainder Theorem for Two Coprime Moduli"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - chinese-remainder-theorem
  - modular-arithmetic
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 9, Ex. 9.6, printed p. 73, PDF p. 85"
created: 2026-08-23
---

# Exercise R28: Chinese Remainder Theorem for Two Coprime Moduli

## Problem Statement

> [!question] Exercise 9.6
> If $\gcd(a,b)=1$, prove that for any integers $u,v$ there is $x$ with $x\equiv u\pmod a$ and $x\equiv v\pmod b$.

## Hints

> [!hint]- Hint 1
> Choose $r,s$ with $ra+sb=1$.

## Solution

> [!success]- Solution
> By Bézout, choose $r,s\in\mathbb Z$ with
> 
> $$
> ra+sb=1.
> $$
> 
> Set
> 
> $$
> x=vra+usb.
> $$
> 
> Modulo $a$, the first term vanishes and $sb\equiv1$, so $x\equiv u$. Modulo $b$, the second term vanishes and $ra\equiv1$, so $x\equiv v$. This proves existence. Any two solutions differ by a multiple of both $a$ and $b$, hence by a multiple of $ab$, giving uniqueness modulo $ab$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §9, Ex. 9.6, printed p. 73, PDF p. 85]. The solution is an independent derivation for this vault, not a solution printed in Artin.
